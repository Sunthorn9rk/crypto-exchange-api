const Wallet = require("../models/wallet.model");

exports.getWalletsByUserId = async (req, res) => {
  try {
    const wallets = await Wallet.findAll({where: {user_id: req.params.userId}});
    res.json(wallets);
  } catch (error) {
    res.status(500).json({error: "Error fetching wallets"});
  }
};

exports.createWallet = async (req, res) => {
  try {
    const {currency_id, balance} = req.body;
    const wallet = await Wallet.create({
      user_id: req.params.userId,
      currency_id,
      balance,
    });
    res.status(201).json(wallet);
  } catch (error) {
    res.status(500).json({error: "Error creating wallet"});
  }
};

exports.updateWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findByPk(req.params.walletId);
    if (!wallet) return res.status(404).json({error: "Wallet not found"});

    wallet.balance = req.body.balance || wallet.balance;
    await wallet.save();
    res.json(wallet);
  } catch (error) {
    res.status(500).json({error: "Error updating wallet"});
  }
};
