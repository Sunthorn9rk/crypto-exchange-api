const {Transaction} = require("../models");

async function seedTransactions() {
  await Transaction.bulkCreate([
    {
      sender_wallet_id: 1,
      receiver_wallet_id: 3,
      amount: 0.05,
      transaction_type: "transfer_internal",
      status: "completed",
    },
  ]);

  console.log("✅ Transactions seeded!");
}

module.exports = seedTransactions;
