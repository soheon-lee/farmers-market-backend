import express from "express";
import { validateToken } from "../middlewares/tokenValidation";
import { orderController } from "../controllers";

const router = express.Router();

console.log(validateToken)
router.post("/carts", validateToken, orderController.addCarts);
router.get("/carts", validateToken, orderController.findCartItemsByUser);

export default router;
