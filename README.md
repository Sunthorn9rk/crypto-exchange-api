# Crypto Exchange API 🪙

API สำหรับระบบแลกเปลี่ยน Cryptocurrencies รองรับการซื้อ-ขายเหรียญดิจิทัลและการโอนเหรียญระหว่างผู้ใช้
## Diagram
![image](https://github.com/user-attachments/assets/5fc48d28-4700-43c3-a371-aa95ac5a55f2)


supports:

- Buying and selling cryptocurrencies (BTC, ETH, XRP, DOGE) with fiat currencies (THB, USD)
- Internal transfers between users
- External transfers to outside wallets
- Transaction logging

---

## 🚀 Features

- User account creation and wallet management
- Cryptocurrency buy/sell order system
- Transaction history tracking
- Internal and external wallet transfers
- Database seeding for quick testing

---

## 🛠️ Tech Stack

- **Node.js** (framework)
- **SQLite** (for local database storage)
- **Sequelize ORM** (for database management)
- **dotenv** (environment variable management)

---

## 📥 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Sunthorn9rk/crypto-exchange-api.git
cd crypto-exchange-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and set up your environment variables:

```env
DB_STORAGE=./database.sqlite
DB_LOGGING=false

PORT=3000

```

### 4. Seed Database

To reset and seed the database with initial data:

```bash
npm run seed
```

This will:

- Drop all existing tables
- Create fresh tables
- Seed initial data for users, currencies, wallets, orders, transactions, and external transfers

### 5. Run the Project

Start the development server:

```bash
npm run dev
```

API will run on `http://localhost:3000`

---

## 📡 API Endpoints

### **User Routes**

- `GET api/users` - List all users
- `GET api/users/:id` - Get a specific user by ID User
- `POST api/users` - Create new user
- `PUT api/users/:id` - Update User by ID User
- `DELETE api/users/:id` - Delete user by ID User

### **Wallet Routes**

- `GET api/wallets` - List all wallets
- `GET api/wallets/user/:id` - Get wallet details by ID User
- `POST api/wallets/user/:id` - Create wallet by ID User
- `PUT api/wallets/user/:id` - Update wallet by ID Wallet

### **Order Routes**

- `GET api/orders` - List all orders
- `POST api/orders` - Create order
- `GET api/orders/:id` - Get Order details by ID Order

### **Transaction Routes**

- `GET api/transactions` - List all transactions
- `POST api/transactions` - Create a new transaction
- `GET api/transactions/:id` - Get transactions details by ID Transactions

### **External Transfers Routes**

- `GET api/external-transfers` - List all external transfers
- `POST api/external-transfers` - Create an external transfer
- `GET api/external-transfers/:id` - Get external transfers details by ID Transfer

---

## ✅ Testing the API

Use tools like **Postman** or **cURL** to interact with the API endpoints.

Example cURL request to list users:

```bash
curl http://localhost:3000/api/users
```

---

## 👨‍💻 Author

- **Sunthorn Rucknai** - [GitHub Profile](https://github.com/Sunthorn9rk)

---

## 📄 License

This project is licensed under the MIT License.
