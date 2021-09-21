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
  const [existingCartItem] = await orderDao.findOrderedItem(
    existingOrder.id,
    productId
  );

  if (!existingCartItem) {
    console.log("a");
    return await orderDao.createOrderedItem(
      existingOrder.id,
      productId,
      quantity
    );
  }

  return await orderDao.addOrderedItemQuantity(existingCartItem.id, quantity);
};

export default { addCarts };
