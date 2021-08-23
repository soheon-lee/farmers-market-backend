import prisma from "../prisma";

const getProducts = async (ordering) => {
  return await prisma.product.findMany({
    include: {
      ProductImage: true,
    },
    orderBy: [
      {
        price: "desc",
      },
    ],
  });
};

export default { getProducts };
