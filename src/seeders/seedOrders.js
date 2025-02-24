const {Order} = require("../models");

async function seedOrders() {
  await Order.bulkCreate([
    {
      user_id: 1,
      currency_pair: "BTC/THB",
      order_type: "buy",
      price: 1000000,
      amount: 0.1,
      status: "open",
    },
    {
      user_id: 2,
      currency_pair: "BTC/USD",
      order_type: "sell",
      price: 30000,
      amount: 0.05,
      status: "open",
    },
  ]);

  console.log("✅ Orders seeded!");
}

module.exports = seedOrders;
