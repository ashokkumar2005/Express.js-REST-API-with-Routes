# 💬 Real-Time Chat Application — Frontend

A modern and responsive **React.js frontend** for a **Real-Time Chat Application**. This application provides a clean chat interface where users can register, log in, view other users, exchange messages, and enjoy a seamless chatting experience.

---

## 📌 Features

- 🔐 User Authentication (Login & Register)
- 👥 View all registered users
- 💬 One-to-one real-time chat interface
- 📨 Send and receive messages
- 📜 Display complete conversation history
- 🟢 Online users indicator
- ⚡ Instant UI updates after sending messages
- 📱 Responsive design for desktop and mobile
- 🔄 Persistent login using Local Storage

---

## 🛠 Tech Stack

- React.js
- JavaScript (ES6+)
- Axios
- React Router DOM
- Context API
- CSS

---

## 📁 Project Structure

```text
src
│
├── components
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── ChatBox.jsx
│   ├── Message.jsx
│   └── OnlineUsers.jsx
│
├── pages
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Chat.jsx
│
├── context
│   └── AuthContext.jsx
│
├── services
│   └── api.js
│
├── App.jsx
├── main.jsx
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ashokkumar2005/Realtime-Chat-App-Frontend.git
```

### 2. Navigate to the Project Folder

```bash
cd Realtime-Chat-App-Frontend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

---

## 🌐 Frontend Pages

| Page | Description |
|------|-------------|
| Register | Create a new account |
| Login | Authenticate existing users |
| Chat | Main chat interface |
| Sidebar | Displays all available users |
| ChatBox | Displays conversation and message input |
| Message | Renders individual messages |
| OnlineUsers | Shows currently online users |

---

## 💬 Chat Workflow

```text
User Login
      │
      ▼
Authentication Successful
      │
      ▼
Fetch All Users
      │
      ▼
Select a User
      │
      ▼
Load Previous Messages
      │
      ▼
Display Conversation
      │
      ▼
Type a Message
      │
      ▼
Send Message
      │
      ▼
Backend Stores Message
      │
      ▼
Update Chat UI Instantly
```

---

## 🔄 API Integration

The frontend communicates with the backend using **Axios**.

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Users

```http
GET /api/users
```

### Messages

```http
GET /api/messages/:userId

POST /api/messages/send/:userId
```

---

## 🧩 Main Components

### Navbar

- Displays application title
- Logout functionality
- Navigation controls

### Sidebar

- Fetches all users
- Displays user list
- Selects active conversation

### ChatBox

- Fetches conversation history
- Displays messages
- Sends new messages
- Clears input after sending
- Auto-updates UI

### Message

- Renders each individual message
- Differentiates sender and receiver messages

### OnlineUsers

- Displays currently online users
- Updates dynamically

---

## 🔄 State Management

The project uses:

- React Context API
- useState
- useEffect

to manage:

- Logged-in user
- Selected chat user
- Messages
- Authentication state

---

## 📱 Responsive Design

- Desktop Layout
- Tablet Support
- Mobile Friendly UI

---

## 🚀 Future Improvements

- 🔴 Real-time messaging using Socket.io
- 📎 File and image sharing
- 😀 Emoji picker
- 📞 Voice & video calling
- 🔍 Search conversations
- 🌙 Dark mode
- 📝 Message editing and deletion
- ✔️ Read receipts
- 🔔 Push notifications

---

## 📚 Learning Highlights

- React Component Architecture
- React Hooks (useState, useEffect, useContext)
- API Integration with Axios
- Authentication Flow
- State Management
- Parent-Child Component Communication
- Conditional Rendering
- Responsive UI Design

---

## 👨‍💻 Author

**Ashok Kumar**

---

⭐ If you found this project helpful, consider giving it a **Star** on GitHub!
