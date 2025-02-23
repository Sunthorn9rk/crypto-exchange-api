const Order = require("../models/order.model");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({error: "Error fetching orders"});
  }
};

exports.createOrder = async (req, res) => {
  try {
    const {user_id, currency_pair, order_type, price, amount} = req.body;
    const order = await Order.create({
      user_id,
      currency_pair,
      order_type,
      price,
      amount,
      status: "open",
      created_at: new Date(),
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({error: "Error creating order"});
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    if (!order) return res.status(404).json({error: "Order not found"});
    res.json(order);
  } catch (error) {
    res.status(500).json({error: "Error fetching order"});
  }
};
