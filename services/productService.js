import { productDao } from "../models";

const getProducts = async (ordering) => {
  const products = await productDao.getProducts(ordering);
  let newProducts = [];

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    product.thumbnailImage = product.ProductImage[0].imageUrl;
    delete product.ProductImage;
    newProducts.push(product);
  }

  return newProducts;
};

export default { getProducts };
