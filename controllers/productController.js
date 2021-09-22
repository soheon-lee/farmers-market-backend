import { productService } from "../services";

const findProducts = async (req, res) => {
  try {
    const ordering = req.query.ordering;
    const products = await productService.findProducts(ordering);
    return res.status(200).json({ products });
  } catch (err) {
    console.log(err);
  }
};

const findOneProduct = async (req, res) => {
  try {
    const productId = Number(req.params.productId);
    const product = await productService.findOneProduct(productId);
    return res.status(200).json({ product });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default { findProducts, findOneProduct };
