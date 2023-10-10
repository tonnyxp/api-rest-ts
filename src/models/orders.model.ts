import { sequelize } from "../config/mysql";
import { Model, DataTypes } from "sequelize";

import Customers from "./customers.model";
import Store from "./stores.model";
import Staff from "./staffs.model";
import OrderItem from "./order-items.model";

export class Order extends Model {
  public orderId!: number;
  public customerId!: number;
  public status!: number;
  public orderDate!: Date;
  public requiredDate!: Date;
  public shippedDate!: Date;
  public note!: string;
  public storeId!: number;
  public staffId!: number;
  public items!: OrderItem[];
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      references: {
        model: Customers,
        key: "customerId",
      },
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1: Pending, 2: Processing, 3: Rejected, 4: Completed",
    },
    orderDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    requiredDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    shippedDate: {
      type: DataTypes.DATEONLY,
    },
    note: {
      type: DataTypes.TEXT,
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Store,
        key: "storeId",
      },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Staff,
        key: "userId",
      },
    },
  },
  {
    sequelize,
    tableName: "orders",
    timestamps: true,
  }
);

export default Order;
