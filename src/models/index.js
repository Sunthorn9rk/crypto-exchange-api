const sequelize = require("../config/database");

const User = require("./user.model");
const Wallet = require("./wallet.model");
const Currency = require("./currency.model");
const Transaction = require("./transaction.model");
const Order = require("./order.model");
const ExternalTransfer = require("./externalTransfer.model");

// สร้างความสัมพันธ์ (Associations)
User.hasMany(Wallet, {foreignKey: "user_id"});
Wallet.belongsTo(User, {foreignKey: "user_id"});

Currency.hasMany(Wallet, {foreignKey: "currency_id"});
Wallet.belongsTo(Currency, {foreignKey: "currency_id"});

Wallet.hasMany(Transaction, {foreignKey: "sender_wallet_id"});
Wallet.hasMany(Transaction, {foreignKey: "receiver_wallet_id"});

User.hasMany(Order, {foreignKey: "user_id"});
Wallet.hasMany(ExternalTransfer, {foreignKey: "wallet_id"});

// Export Models
module.exports = {
  sequelize,
  User,
  Wallet,
  Currency,
  Transaction,
  Order,
  ExternalTransfer,
};
