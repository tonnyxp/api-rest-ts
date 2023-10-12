import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/mysql";

import Product from "./products.model";
import Store from "./stores.model";

export class Stock extends Model {
  public productId!: number;
  public storeId!: number;
  public quantity!: number;
  public minimum!: number;
  public maximum!: number;
  public reorder!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Stock.init(
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Product,
        key: "productId",
      },
    },
    storeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Store,
        key: "storeId",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    minimum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    maximum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    reorder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: "stocks",
    timestamps: false,
  }
);

Stock.belongsTo(Product, { foreignKey: "productId" });
Stock.belongsTo(Store, { foreignKey: "storeId" });

export default Stock;
