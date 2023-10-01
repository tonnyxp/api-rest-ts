import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/mysql";

class Product extends Model {
  public productId!: number;
  public code!: string;
  public name!: string;
  public description!: string;
  public model!: string;
  public cost!: number;
  public price!: number;
  public stocktaking!: boolean;
  public active!: boolean;
  public categoryId!: number;
  public brandId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING(50),
    },
    cost: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stocktaking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "categoryId",
      },
    },
    brandId: {
      type: DataTypes.INTEGER,
      references: {
        model: "brands",
        key: "brandId",
      },
    },
  },
  {
    sequelize,
    tableName: "products",
    timestamps: true,
  }
);

export default Product;
