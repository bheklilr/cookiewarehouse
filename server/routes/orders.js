import { Router } from 'express';
import { CookieOrder } from "../models";
import { getAll, getById, addOrder, updateOrder, deleteOrder, deleteAll } from "../controllers/orders";

const router = Router();

router.get("/", async function(req, res) {
  try {
    const orders = await getAll();
    res.json(orders);
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
});

router.get("/:id", async function(req, res) {
  try {
    const order = await getById(req.params.id);
    res.json(order);
  } catch (error) {
    res.status(404);
    res.json({ error });
  }
});

router.post("/", async function(req, res) {
  try {
    const newOrder = await addOrder(req.body);
    res.json(newOrder);
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
});

router.put("/:id", async function(req, res) {
  try {
    const updatedOrder = await updateOrder(
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
    const deletedOrder = await deleteOrder(req.params.id);
    res.json(deletedOrder);
  } catch (error) {
    res.status(404);
    res.json({ error });
  }
});

router.delete("/", async function(req, res) {
  try {
    const deletedOrder = await deleteAll();
    res.json(deletedOrders);
  } catch (error) {
    res.status(404);
    res.json({ error });
  }
});

export default router;
