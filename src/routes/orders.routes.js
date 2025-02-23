const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/order.controller");

// GET: ดึงข้อมูลคำสั่งซื้อทั้งหมด
router.get("/", OrderController.getAllOrders);

// POST: สร้างคำสั่งซื้อใหม่
router.post("/", OrderController.createOrder);

// GET: ดึงข้อมูลคำสั่งซื้อจาก ID
router.get("/:orderId", OrderController.getOrderById);

module.exports = router;
