import { Router } from "express";
import {
    addGrocery,
    viewGroceries,
    updateGrocery,
    deleteGrocery,
} from "../controllers/adminController";

const router = Router();

router.post("/add", addGrocery);
router.get("/view", viewGroceries);
router.put("/update/:id", updateGrocery);
router.delete("/delete/:id", deleteGrocery);

export default router;

