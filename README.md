# 🚀 Node.js Express Backend — Routes & Middleware

A simple and well-structured **REST API backend** built using **Node.js** and **Express.js**.
This project demonstrates clean architecture using **routes, controllers, middleware, and utility functions**.

---

## 📌 Features

* ✅ RESTful API using Express.js
* 📂 Clean and scalable folder structure
* 🔀 Separation of routes and controllers
* 🧩 Custom middleware support
* 🛠 Utility/helper functions
* 📦 JSON request & response handling

---

## 🛠 Tech Stack

* Node.js
* Express.js
* JavaScript
* Nodemon

---

## 📁 Project Structure

```
project-folder
│
├── controllers
│   └── userController.js
│
├── middleware
│   └── loggerMiddleware.js
│
├── routes
│   └── userRoutes.js
│
├── utils
│   └── helper.js
│
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ashokkumar2005/Express.js-REST-API-with-Routes.git
```

### 2. Navigate to Project Folder

```bash
cd Express.js-REST-API-with-Routes
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Server

```bash
npm run dev
```

> Make sure **Nodemon** is installed globally or included in devDependencies.

---

## 🌐 API Endpoints (Example)

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/users     | Get all users   |
| POST   | /api/users     | Create new user |
| GET    | /api/users/:id | Get user by ID  |
| PUT    | /api/users/:id | Update user     |
| DELETE | /api/users/:id | Delete user     |

---

## 🔧 Middleware Example

The project includes a custom logger middleware:

* Logs request method and URL
* Helps in debugging and tracking API calls

---

## 🧠 Learning Highlights

* How Express routing works
* Middleware flow (`req → middleware → controller → res`)
* Clean backend architecture
* Separation of concerns

---

## 🚀 Future Improvements

* Add database integration (MongoDB / MySQL)
* Implement authentication (JWT)
* Add validation (Joi / Zod)
* Error handling middleware

---

## 📌 Author

**Ashok Kumar**

---

⭐ If you like this project, give it a star on GitHub!
