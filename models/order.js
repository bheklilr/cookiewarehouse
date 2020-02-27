const mongoose = require("mongoose");
const { req, opt } = require("./util");

const cookieOrderSchema = new mongoose.Schema({
  cookie: req(String),
  count: req(Number)
});

const CookieOrder = mongoose.model("CookieOrder", cookieOrderSchema);

const orderSchema = new mongoose.Schema({
  customer: req(String),
  contact: req(String),
  location: req(String),
  order: [CookieOrder],
  shipped: { type: Boolean, default: false },
  source: opt(String),
  filled: opt(Boolean),
  paid: opt(Boolean),
  delivered: opt(Boolean),
  paymentReceived: opt(Boolean),
  paymentType: opt(Boolean),
  deleted: opt(Boolean),
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: null },
  filledAt: { type: Date, default: null },
  deliveredAt: { type: Date, default: null },
  paymentReceivedAt: { type: Date, default: null }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = {
  CookieOrder,
  Order
};
