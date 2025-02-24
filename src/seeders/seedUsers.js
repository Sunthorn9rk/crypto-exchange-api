const {User} = require("../models");

async function seedUsers() {
  await User.bulkCreate([
    {
      username: "alice",
      email: "alice@example.com",
      password_hash: "hashedpassword1",
      status: "active",
    },
    {
      username: "bob",
      email: "bob@example.com",
      password_hash: "hashedpassword2",
      status: "active",
    },
  ]);

  console.log("✅ Users seeded!");
}

module.exports = seedUsers;
