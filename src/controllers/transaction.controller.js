const Transaction = require("../models/transaction.model");

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({error: "Error fetching transactions"});
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const {sender_wallet_id, receiver_wallet_id, amount, transaction_type} =
      req.body;
    const transaction = await Transaction.create({
      sender_wallet_id,
      receiver_wallet_id,
      amount,
      transaction_type,
      status: "pending",
      created_at: new Date(),
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({error: "Error creating transaction"});
  }
};

exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.transactionId);
    if (!transaction)
      return res.status(404).json({error: "Transaction not found"});
    res.json(transaction);
  } catch (error) {
    res.status(500).json({error: "Error fetching transaction"});
  }
};
