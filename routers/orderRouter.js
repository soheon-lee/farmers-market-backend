import express from "express";
import tokenValidation from "../middlewares/tokenValidation";
import { orderController } from "../controllers";

const router = express.Router();

router.post("/carts", tokenValidation, orderController.addCarts);

export default router;