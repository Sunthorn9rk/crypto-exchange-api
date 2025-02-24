const {ExternalTransfer} = require("../models");

async function seedExternalTransfers() {
  await ExternalTransfer.bulkCreate([
    {
      wallet_id: 1,
      external_address: "1BoatSLRHtKNngkdXEeobR76b53LETtpyT",
      amount: 0.1,
      status: "completed",
    },
  ]);

  console.log("✅ External transfers seeded!");
}

module.exports = seedExternalTransfers;
