import { Schema, model } from "mongoose";
import { req, opt } from "./util";

const cookieOrderSchema = new Schema({
  cookie: req(String),
  count: req(Number)
});

const CookieOrder = model("CookieOrder", cookieOrderSchema);

const orderSchema = new Schema({
  customer: req(String),
  contact: req(String),
  location: req(String),
  order: [cookieOrderSchema],
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

const Order = model("Order", orderSchema);

export default {
  CookieOrder,
  Order
};
