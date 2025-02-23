const express = require("express");
const router = express.Router();
const WalletController = require("../controllers/wallet.controller");

// GET: ดึงข้อมูลกระเป๋าเงินของผู้ใช้
router.get("/user/:userId", WalletController.getWalletsByUserId);

// POST: สร้างกระเป๋าเงินใหม่
router.post("/user/:userId", WalletController.createWallet);

// PUT: อัพเดตข้อมูลกระเป๋าเงิน
router.put("/:walletId", WalletController.updateWallet);

module.exports = router;
