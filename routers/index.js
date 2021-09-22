import express from "express";
import userRouter from "./userRouter";
import productRouter from "./productRouter";
import orderRouter from "./orderRouter";
import privateProductRouter from "./privateProductRouter";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/private/products", privateProductRouter);

export default router;
