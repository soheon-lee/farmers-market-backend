/*
  Warnings:

  - A unique constraint covering the columns `[order_id,product_id]` on the table `ordered_items` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `ordered_items.order_id_product_id_unique` ON `ordered_items`(`order_id`, `product_id`);
