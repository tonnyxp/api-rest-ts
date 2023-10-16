import { sequelize } from "../config/mysql";
import { Model, DataTypes } from "sequelize";

import Order from "./orders.model";
import Product from "./products.model";

export class OrderItem extends Model {
  public orderId!: number;
  public itemId!: number;
  public productId!: number;
  public quantity!: number;
  public received!: number;
  public purchasePrice!: number;
  public salePrice!: number;
  public discount!: number;
  public total!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

OrderItem.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: Order,
        key: "orderId",
      },
    },
    itemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "productId",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    received: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    purchasePrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    salePrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    discount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    total: {
      type: DataTypes.VIRTUAL,
      get() {
        return (
          Number(this.getDataValue("quantity")) *
          Number(this.getDataValue("purchasePrice"))
        );
      },
    },
  },
  {
    sequelize,
    tableName: "order_items",
    timestamps: false,
  }
);

export default OrderItem;
