const {Currency} = require("../models");

async function seedCurrencies() {
  await Currency.bulkCreate([
    {currency_code: "BTC", currency_name: "Bitcoin"},
    {currency_code: "ETH", currency_name: "Ethereum"},
    {currency_code: "XRP", currency_name: "Ripple"},
    {currency_code: "DOGE", currency_name: "Dogecoin"},
    {currency_code: "THB", currency_name: "Thai Baht"},
    {currency_code: "USD", currency_name: "US Dollar"},
  ]);

  console.log("✅ Currencies seeded!");
}

module.exports = seedCurrencies;
