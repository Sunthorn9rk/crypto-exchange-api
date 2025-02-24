const seedUsers = require("./seedUsers");
const seedCurrencies = require("./seedCurrencies");
const seedWallets = require("./seedWallets");
const seedOrders = require("./seedOrders");
const seedTransactions = require("./seedTransactions");
const seedExternalTransfers = require("./seedExternalTransfers");
const {sequelize} = require("../models");

async function runSeed() {
  try {
    await sequelize.sync({force: true}); // Reset DB
    await seedUsers();
    await seedCurrencies();
    await seedWallets();
    await seedOrders();
    await seedTransactions();
    await seedExternalTransfers();
    console.log("🌱 Database seeding complete!");
  } catch (error) {
    console.error("❌ Seeding error:", error);
  } finally {
    process.exit();
  }
}

runSeed();
