import { Request, Response } from "express";
import Grocery from "../models/Grocery";
import Order from "../models/Order";

export const listGroceries = async (_req: Request, res: Response) => {
    try {
        const groceries = await Grocery.findAll({ where: { quantity: { gt: 0 } } });
        res.status(200).json(groceries);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const placeOrder = async (req: any, res: any) => {
    const { items } = req.body;
    try {
        const orderItems: any[] = [];
        for (const item of items) {
            const grocery = await Grocery.findByPk(item.id);
            if (!grocery || grocery.quantity < item.quantity) {
                return res.status(400).json({ message: "Insufficient stock for item: " + item.id });
            }

            grocery.quantity -= item.quantity;
            await grocery.save();
            orderItems.push({ id: item.id, quantity: item.quantity });
        }

        const order = await Order.create({ items: JSON.stringify(orderItems) });
        res.status(201).json(order);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

