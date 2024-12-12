import { Request, Response } from "express";
import Grocery from "../models/Grocery";

export const addGrocery = async (req: Request, res: Response) => {
    const { name, price, quantity } = req.body;
    try {
        const grocery = await Grocery.create({ name, price, quantity });
        res.status(201).json(grocery);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const viewGroceries = async (_req: Request, res: Response) => {
    try {
        const groceries = await Grocery.findAll();
        res.status(200).json(groceries);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateGrocery = async (req: any, res: any) => {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    try {
        const grocery = await Grocery.findByPk(id);
        if (!grocery) return res.status(404).json({ message: "Grocery not found" });

        grocery.name = name;
        grocery.price = price;
        grocery.quantity = quantity;
        await grocery.save();
        res.status(200).json(grocery);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteGrocery = async (req: any, res: any) => {
    const { id } = req.params;
    try {
        const grocery = await Grocery.findByPk(id);
        if (!grocery) return res.status(404).json({ message: "Grocery not found" });

        await grocery.destroy();
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

