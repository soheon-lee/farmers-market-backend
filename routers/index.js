import express from "express";
import userRouter from "./userRouter";
import productRouter from "./productRouter";
import orderRouter from "./orderRouter";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);

export default router;
