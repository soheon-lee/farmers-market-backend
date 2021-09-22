import prisma from "../prisma";

const findOrder = async (userId, orderStatusId) => {
  return await prisma.$queryRaw`
    SELECT
      *
    FROM
      orders
    WHERE
      user_id=${userId}
    AND
      order_status_id=${orderStatusId}
  `;
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
  return await prisma.$queryRaw`
    SELECT
      id 
    FROM
      ordered_items
    WHERE
      order_id=${orderId}
    AND
      product_id=${productId}
  `;
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
  return await prisma.$queryRaw`
    SELECT
      oi.id as cart_item_id,
      quantity,
      p.name,
      p.price,
      p.id as product_id
    FROM
      ordered_items oi
    JOIN
      products as p
    ON
      oi.product_id = p.id
  `;
};
export default {
  findOrder,
  createOrder,
  findOrderedItem,
  createOrderedItem,
  addOrderedItemQuantity,
  findOrderedItemsByOrder,
};
