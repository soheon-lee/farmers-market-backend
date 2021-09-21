import prisma from "../prisma";

const findProducts = async (ordering) => {
  return await prisma.product.findMany({
    include: {
      productImage: true,
    },
    orderBy: [
      {
        price: "desc",
      },
    ],
  });
};

const findOneProduct = async (productId) => {
  return await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
};
export default { findProducts, findOneProduct };
