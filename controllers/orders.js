const { Order } = require("../models");

async function getAll() {
  const orders = await Order.find({});
  return orders;
}

async function getById(id) {
  const order = await Order.findById(id);
  return order;
}

async function updateOrder(id, update) {
  const current = await Order.findOne({ _id: id });
  const update = await Order.updateOne({ _id: id }, { ...current, ...update });
  return update;
}

async function addOrder(order) {
  const data = await Order.create(order);
  return data;
}

module.exports = {
  getAll,
  getById,
  updateOrder,
  addOrder
};
