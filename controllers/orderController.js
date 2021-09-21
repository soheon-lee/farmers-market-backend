import { productDao } from "../models";
import { orderService } from "../services";

const addCarts = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;
    const orderedItem = await orderService.addCarts(
      userId,
      productId,
      quantity
    );
    return res.status(201).json({ orderedItem });
  } catch (err) {
    console.log(err);
  }
};

export default { addCarts };
