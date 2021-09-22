import express from "express";
import { productController } from "../controllers";
import { validateAdminToken } from "../middlewares/tokenValidation";

const router = express.Router();

router.get("", validateAdminToken, productController.findProducts);

export default router;
