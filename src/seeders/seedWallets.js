const {Wallet} = require("../models");

async function seedWallets() {
  await Wallet.bulkCreate([
    {user_id: 1, currency_id: 1, balance: 1.5}, // Alice - BTC
    {user_id: 1, currency_id: 5, balance: 50000}, // Alice - THB
    {user_id: 2, currency_id: 1, balance: 0.75}, // Bob - BTC
    {user_id: 2, currency_id: 6, balance: 1000}, // Bob - USD
  ]);

  console.log("✅ Wallets seeded!");
}

module.exports = seedWallets;
