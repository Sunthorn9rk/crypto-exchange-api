const {User, Wallet} = require("../models");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({include: Wallet});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({error: "User not found"});
    res.json(user);
  } catch (error) {
    res.status(500).json({error: "Error fetching user"});
  }
};

exports.createUser = async (req, res) => {
  try {
    const {username, email, password_hash} = req.body;
    const user = await User.create({username, email, password_hash});
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({error: "Error creating user"});
  }
};

exports.updateUser = async (req, res) => {
  try {
    const {username, email, password_hash} = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({error: "User not found"});

    user.username = username || user.username;
    user.email = email || user.email;
    user.password_hash = password_hash || user.password_hash;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({error: "Error updating user"});
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({error: "User not found"});

    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({error: "Error deleting user"});
  }
};
