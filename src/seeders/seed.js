const {sequelize, User, Currency} = require("../models");

async function seedDatabase() {
  await sequelize.sync({force: true}); // ลบ DB เดิมและสร้างใหม่

  await User.create({
    username: "testuser",
    email: "test@example.com",
    password_hash: "hashedpassword",
  });

  await Currency.bulkCreate([
    {currency_code: "BTC", currency_name: "Bitcoin"},
    {currency_code: "ETH", currency_name: "Ethereum"},
    {currency_code: "XRP", currency_name: "Ripple"},
    {currency_code: "DOGE", currency_name: "Dogecoin"},
    {currency_code: "THB", currency_name: "Thai Baht"},
    {currency_code: "USD", currency_name: "US Dollar"},
  ]);

  console.log("Seeding completed!");
}

seedDatabase();
