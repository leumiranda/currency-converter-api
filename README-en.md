# 🌍 Currency Converter API

> **Simple, powerful, and reliable!** An API for real-time currency conversion using an external exchange rate API. 🚀

---

## 🛠️ Technologies Used
- **Node.js**: For building the backend.
- **Express**: Framework for managing routes and requests.
- **Axios**: For consuming the external exchange rate API.
- **MongoDB Atlas**: For storing data in the database.
- **Mongoose**: ODM for MongoDB connection.
- **Insomnia**: For testing the API (or use your browser!).

---

## 🌟 How to Set Up Locally

### 1️⃣ Prerequisites
- Node.js installed ([Download here](https://nodejs.org/)).
- MongoDB Atlas account ([Sign up here](https://www.mongodb.com/atlas)).

### 2️⃣ Environment Variables
Create a **`.env`** file in the root of the project and add:
```
env
PORT=3000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/currencyDB?retryWrites=true&w=majority
EXCHANGE_API_KEY=YOUR_EXTERNAL_API_KEY

    MONGO_URI: Connection string generated in MongoDB Atlas.
    EXCHANGE_API_KEY: API key for the external exchange rate service.

```
3️⃣ Install Dependencies

In the terminal, run:

npm install

4️⃣ Start the Server

Start the server locally:

npm start

The server will run on http://localhost:3000.
🚀 How to Use the API
Endpoint: GET /api/currency/convert

    Query Parameters:
        from: Source currency (e.g., USD).
        to: Target currency (e.g., BRL).
        amount: Amount to convert (e.g., 100).

Example Request:

GET /api/currency/convert?from=USD&to=BRL&amount=100

Example Response:

{
  "from": "USD",
  "to": "BRL",
  "amount": "100",
  "convertedAmount": "611.00"
}

You can test it using Insomnia or directly in the browser!
🌟 Contribution

Contributions are welcome! Fork the repo and submit your PR.

Read the documentation in Portuguese here 👉 [README - BR](./README-pt.md).
