import { Router } from "express";
import { listGroceries, placeOrder } from "../controllers/userController";

const router = Router();

router.get("/list", listGroceries);
router.post("/order", placeOrder);

export default router;

