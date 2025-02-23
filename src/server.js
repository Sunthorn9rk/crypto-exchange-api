const express = require("express");
const app = express();
require("dotenv").config();
const {sequelize} = require("./models");

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./routes/user.routes");
app.use("/api", userRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
