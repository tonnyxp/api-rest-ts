import { sequelize } from "../config/mysql";
import Order from "../models/orders.model";
import OrderItem from "../models/order-items.model";

export class OrderService {
  static async createOrder(order: Partial<Order>) {
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
