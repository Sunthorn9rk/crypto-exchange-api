const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.routes");
const walletsRoutes = require("./routes/wallets.routes");
// const transactionsRoutes = require("./routes/transactions");
// const ordersRoutes = require("./routes/orders");
// const externalTransfersRoutes = require("./routes/externalTransfers");

app.use(bodyParser.json());

app.use("/api/users", usersRoutes);
app.use("/api/wallets", walletsRoutes);
// app.use("/api/transactions", transactionsRoutes);
// app.use("/api/orders", ordersRoutes);
// app.use("/api/external-transfers", externalTransfersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
