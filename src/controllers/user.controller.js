const {User, Wallet} = require("../models");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({include: Wallet});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
