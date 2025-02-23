const {User, Currency} = require("../models");

async function seedDatabase() {
  await User.create({
    username: "testuser",
    email: "test@example.com",
    password_hash: "hashedpassword",
  });

  await Currency.bulkCreate([
    {currency_code: "BTC", currency_name: "Bitcoin"},
    {currency_code: "ETH", currency_name: "Ethereum"},
  ]);

  console.log("Seeding completed!");
}

seedDatabase();
