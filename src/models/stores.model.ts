import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/mysql";

class Store extends Model {
  public storeId!: number;
  public code!: string;
  public name!: string;
  public phone!: string;
  public email!: string;
  public street!: string;
  public suburb!: string;
  public city!: string;
  public state!: string;
  public zipCode!: string;
  public country!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Store.init(
  {
    storeId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    phone: {
      type: DataTypes.STRING(25),
    },
    email: {
      type: DataTypes.STRING(50),
    },
    street: {
      type: DataTypes.STRING(50),
    },
    suburb: {
      type: DataTypes.STRING(50),
    },
    city: {
      type: DataTypes.STRING(50),
    },
    state: {
      type: DataTypes.STRING(50),
    },
    zipCode: {
      type: DataTypes.STRING(5),
    },
    country: {
      type: DataTypes.STRING(3),
    },
  },
  {
    sequelize,
    tableName: "stores",
    timestamps: true,
  }
);

export default Store;
