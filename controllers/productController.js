import { productService } from "../services";

const getProducts = async (req, res) => {
  try {
    const ordering = req.query.ordering;
    const products = await productService.getProducts(ordering);
    return res.status(200).json({ products });
  } catch (err) {
    console.log(err);
  }
};

export default { getProducts };
