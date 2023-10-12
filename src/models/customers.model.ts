import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/mysql";

export class Customer extends Model {
  public customerId!: number;
  public code!: string;
  public name!: string;
  public contact!: string;
  public phone!: string;
  public email!: string;
  public street!: string;
  public suburb!: string;
  public city!: string;
  public state!: string;
  public zipCode!: string;
  public country!: string;
  public type!: number;
  public status!: boolean;
  public creditSale!: boolean;
  public creditLimit!: number;
  public creditDays!: number;
  public note!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Customer.init(
  {
    customerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING(50),
    },
    phone: {
      type: DataTypes.STRING(25),
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
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
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1: Customer, 2: Customer/Supplier, 3: Supplier",
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    creditSale: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    creditLimit: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    creditDays: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    note: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: "customers",
    timestamps: true,
  }
);

export default Customer;
