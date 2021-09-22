import { productDao } from "../models";

const findProducts = async (ordering) => {
  const products = await productDao.findProducts(ordering);
  let newProducts = [];

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log(product);
    product.thumbnailImage = product.productImage[0].imageUrl;
    delete product.productImage;
    newProducts.push(product);
  }

  return newProducts;
};

const findOneProduct = async (productId) => {
  return await productDao.findOneProduct(productId);
};

export default { findProducts, findOneProduct };
