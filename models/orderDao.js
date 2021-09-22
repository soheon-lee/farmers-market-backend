import prisma from "../prisma";

const findOrder = async (userId, orderStatusId) => {
  return await prisma.order.findMany({
    where: {
      userId,
      orderStatusId,
    },
  });
};

const createOrder = async (userId, orderNumber, orderStatusId = 1) => {
  return await prisma.order.create({
    data: {
      userId,
      orderNumber,
      orderStatusId,
    },
  });
};

const findOrderedItem = async (orderId, productId) => {
  return await prisma.orderedItem.findUnique({
    where: {
      orderId,
      productId,
    },
  });
};

const createOrderedItem = async (orderId, productId, quantity) => {
  return await prisma.orderedItem.create({
    data: {
      orderId,
      productId,
      quantity,
    },
  });
};

const addOrderedItemQuantity = async (cartItemId, quantity) => {
  return await prisma.orderedItem.update({
    where: {
      id: cartItemId,
    },
    data: {
      quantity: {
        increment: quantity,
      },
    },
  });
};

const findOrderedItemsByOrder = async (orderId) => {
  return await prisma.orderedItem.findMany({
    where: {
      orderId,
    },
    select: {
      quantity: true,
      product: {
        select: {
          name: true,
          price: true,
        },
      },
    },
  });
};
export default {
  findOrder,
  createOrder,
  findOrderedItem,
  createOrderedItem,
  addOrderedItemQuantity,
  findOrderedItemsByOrder,
};
