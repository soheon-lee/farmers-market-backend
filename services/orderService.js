import { orderDao } from "../models";

const addCarts = async (userId, productId, quantity) => {
  const orderStatusId = 1;
  const [existingOrder] = await orderDao.findOrder(userId, orderStatusId);

  if (!existingOrder) {
    const date = new Date();
    const newOrderNumber = date.toTimeString();
    const newOrder = await orderDao.createOrder(
      userId,
      newOrderNumber,
      orderStatusId
    );
    return await orderDao.createOrderedItem(newOrder.id, productId, quantity);
  }
  const existingCartItem = await orderDao.findOrderedItem(
    existingOrder.id,
    productId
  );

  if (!existingCartItem.length) {
    return await orderDao.createOrderedItem(
      existingOrder.id,
      productId,
      quantity
    );
  }

  return await orderDao.addOrderedItemQuantity(existingCartItem.id, quantity);
};

const findCartItemsByUser = async (userId) => {
  const [activeOrder] = await orderDao.findOrder(userId, 1);
  return await orderDao.findOrderedItemsByOrder(activeOrder.id);
};

export default { addCarts, findCartItemsByUser };
