import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/mysql";

class Brand extends Model {
  public brandId!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Brand.init(
  {
    brandId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "brands",
    sequelize,
    timestamps: true,
  }
);

export default Brand;
