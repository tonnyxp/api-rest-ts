import { sequelize } from "../config/mysql";
import Order from "../models/orders.model";
import OrderItem from "../models/order-items.model";
import { ORDER_STATUS } from "../constants/order";
import Stock from "../models/stocks.model";

export class OrderService {
  static async createOrder(order: Partial<Order>): Promise<Order | null> {
    const transaction = await sequelize.transaction();

    try {
      const newOrder = await Order.create(order, { transaction });

      order.items?.map(async (item) => {
        await OrderItem.create({ ...item, orderId: newOrder.orderId });
      });

      await transaction.commit();
      return newOrder;
    } catch (error) {
      console.error(error);
      await transaction.rollback();
      return null;
    }
  }

  static async getOrders(): Promise<Order[]> {
    try {
      const orders = await Order.findAll();
      return orders;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async getOrder(id: string): Promise<Order | null> {
    try {
      const order = await Order.findByPk(id);
      return order;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async updateOrder(
    id: string,
    updatedOrder: Partial<Order>
  ): Promise<Order | null> {
    try {
      const order = await Order.findByPk(id);
      if (!order) return null;

      await order.update(updatedOrder);
      await updateStock(order);
      return order;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async deleteOrderItem(id: string): Promise<boolean> {
    try {
      const orderItem = await OrderItem.findByPk(id);
      if (!orderItem) return false;

      await orderItem.destroy();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

const updateStock = async (order: Order) => {
  if (order.status === ORDER_STATUS.COMPLETED) {
    const items = await OrderItem.findAll({
      where: { orderId: order.orderId },
    });

    items.map(async (item) => {
      const stock = await Stock.findOne({
        where: { productId: item.productId, storeId: order.storeId },
      });

      if (stock) {
        await stock.update({ quantity: stock.quantity + item.quantity });
      }
    });
  }
};
