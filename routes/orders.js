const router = require("express").Router();
const { CookieOrder } = require("../models");
const OrdersController = require("../controllers/orders");

router.get("/", async function(req, res) {
  try {
    const orders = await OrdersController.getAll();
    res.json(orders);
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
});

router.get("/:id", async function(req, res) {
  try {
    const order = await OrdersController.getById(req.params.id);
    res.json(order);
  } catch (error) {
    res.status(404);
    res.json({ error });
  }
});

router.post("/", async function(req, res) {
  try {
    const newOrder = await OrdersController.addOrder(req.body);
    res.json(newOrder);
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
});

router.put("/:id", async function(req, res) {
  try {
    const updatedOrder = await OrdersController.updateOrder(
      req.params.id,
      req.body
    );
    res.json(updatedOrder);
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
});

router.delete("/:id", async function(req, res) {
  try {
    const deletedOrder = await OrdersController.deleteOrder(req.params.id);
    res.json(deletedOrder);
  } catch (error) {
    res.status(404);
    res.json({ error });
  }
});

router.delete("/", async function(req, res) {
  try {
    const deletedOrder = await OrdersController.deleteAll();
    res.json(deletedOrders);
  } catch (error) {
    res.status(404);
    res.json({ error });
  }
});

module.exports = router;
