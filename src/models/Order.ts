import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Order extends Model {
    public id!: number;
    public items!: string;
}

Order.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        items: { type: DataTypes.TEXT, allowNull: false }, // Store items as JSON string
    },
    { sequelize, modelName: "Order" },
);

export default Order;

