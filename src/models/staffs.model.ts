import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/mysql";

class Staff extends Model {
  public userId!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public phone!: string;
  public birthdate!: Date;
  public gender!: string;
  public active!: boolean;
  public storeId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Staff.init(
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      references: {
        model: "users",
        key: "uuid",
      },
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(25),
    },
    birthdate: {
      type: DataTypes.DATEONLY,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    storeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "stores",
        key: "storeId",
      },
    },
  },
  {
    sequelize,
    tableName: "staffs",
    timestamps: true,
  }
);

export default Staff;
