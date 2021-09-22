import { productDao } from "../models";

const findProducts = async (ordering) => {
  const products = await productDao.findProducts(ordering);
  let newProducts = [];

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    product.thumbnailImage = product.productImage[0].imageUrl;
    delete product.productImage;
    newProducts.push(product);
  }

  return newProducts;
};

const findOneProduct = async (productId) => {
  const product = await productDao.findOneProduct(productId);
  if (!product) {
    const err = new Error("PRODUCT_DOES_NOT_EXIST");
    err.statusCode = 404;
    throw err;
  }
  return product;
};

export default { findProducts, findOneProduct };
