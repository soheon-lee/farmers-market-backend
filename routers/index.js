import express from "express";
const router = express.Router();

import userRouter from "./userRouter";
import productRouter from "./productRouter";

router.use("/users", userRouter);
router.use("/products", productRouter);

export default router;
