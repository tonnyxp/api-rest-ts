import { sequelize } from "../config/mysql";
import Order from "../models/orders.model";
import OrderItem from "../models/order-items.model";

export class OrderService {
  static async createOrder(order: Partial<Order>) {
    const transaction = await sequelize.transaction();
    console.log("order", order);
    try {
      const newOrder = await Order.create(order, { transaction });

      order.items?.map(async (item) => {
        const product = { orderId: newOrder.orderId, item };
        await OrderItem.create(product, { transaction });
      });

      await transaction.commit();
      return newOrder;
    } catch (error) {
      console.error(error);
      await transaction.rollback();
      return null;
    }
  }
}
