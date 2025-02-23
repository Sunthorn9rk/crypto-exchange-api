const ExternalTransfer = require("../models/externalTransfer.model");

exports.createExternalTransfer = async (req, res) => {
  try {
    const {wallet_id, external_address, amount} = req.body;
    const transfer = await ExternalTransfer.create({
      wallet_id,
      external_address,
      amount,
      status: "pending",
      created_at: new Date(),
    });
    res.status(201).json(transfer);
  } catch (error) {
    res.status(500).json({error: "Error creating external transfer"});
  }
};

exports.getAllExternalTransfers = async (req, res) => {
  try {
    const transfers = await ExternalTransfer.findAll();
    res.json(transfers);
  } catch (error) {
    res.status(500).json({error: "Error fetching external transfers"});
  }
};

exports.getExternalTransferById = async (req, res) => {
  try {
    const transfer = await ExternalTransfer.findByPk(req.params.transferId);
    if (!transfer) return res.status(404).json({error: "Transfer not found"});
    res.json(transfer);
  } catch (error) {
    res.status(500).json({error: "Error fetching external transfer"});
  }
};
