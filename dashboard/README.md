# 📊 Stock Trading Platform

A full-stack MERN (MongoDB, Express.js, React, Node.js) application that simulates a Zerodha-like stock trading platform. It features user login, holdings management, real-time charting, and a clean dashboard experience—all built in just **1 day**.

🔗 **Project GitHub Link:**  
[https://github.com/ShehbaazAalam/Stock-Trading-Plateform](https://github.com/ShehbaazAalam/Stock-Trading-Plateform)

---

## 📁 Project Structure

- **backend/** – Node.js + Express server connected to MongoDB  
- **frontend/** – React frontend for users  
- **dashboard/** – Standalone dashboard module

---

## 🚀 Features

- 🔐 Secure Login & Registration  
- 📊 View Holdings with qty, avg price, current price, P&L  
- 📈 Charting support with Chart.js  
- 📦 MongoDB data persistence  
- 🎯 Color-coded P&L indicators  
- 🧠 Conditional rendering when no holdings  
- ⚙️ Modular folder structure  
- ⚡ Responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios, Chart.js  
- **Backend:** Node.js, Express.js, CORS  
- **Database:** MongoDB + Mongoose  
- **Tools:** Nodemon, dotenv, bcrypt (optional)

---

## 🌐 Getting Started

```bash
# Clone the repository
git clone https://github.com/ShehbaazAalam/Stock-Trading-Plateform.git
cd Stock-Trading-Plateform

# Start backend
cd backend
npm install
nodemon index.js

# Start frontend
cd ../frontend
npm install
npm start

# Start dashboard
cd ../dashboard
npm install
npm start
📬 API Endpoints
GET /allHoldings – Get all user holdings

POST /addHoldings – Add new holding (name, qty, avg, price)

🖼️ Screenshots
Add your screenshots to frontend/public/screenshots/ and link here:

md
Copy
Edit
![Holdings View](./frontend/public/screenshots/holdings.png)
👨‍💻 Author
Shehbaaz Aalam
🔗 GitHub: github.com/ShehbaazAalam
📧 Email: shehbaazaalam00786@gmail.com

📄 License
This project is open source and free to use under the MIT License.
Feel free to fork, modify, or contribute.
