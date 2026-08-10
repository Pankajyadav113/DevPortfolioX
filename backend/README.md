# ⚙️ DevPortfolioX — Backend REST API

This is the official Node.js Express & MongoDB backend service for **DevPortfolioX**. It handles contact form submissions, stores messages in MongoDB, dispatches email notifications via Nodemailer, and exposes server health endpoints.

---

## 🛠 Tech Stack

- **Runtime**: Node.js (ES Modules syntax)
- **Framework**: Express.js 4
- **Database**: MongoDB with Mongoose 9 ORM
- **Security & Utilities**:
  - `cors`: Cross-Origin Resource Sharing handling
  - `helmet`: HTTP Header Security
  - `morgan`: HTTP Request Logger
  - `express-validator`: Input Data Validation
  - `nodemailer`: Automated Email Delivery

---

## 📁 Directory Architecture

```text
backend/
├── package.json
├── .env.example
├── .env                    # Local Environment Configuration (PORT, MONGODB_URI, SMTP)
└── src/
    ├── server.js           # Server Entry Point & Process Bootstrap
    ├── app.js              # Express Middleware Initialization & Route Registration
    ├── config/
    │   └── db.js           # MongoDB Mongoose Connection Manager
    ├── controllers/
    │   ├── contactController.js  # Contact Submission Logic & Email Hook
    │   └── healthController.js   # Server Status & Health Check Handlers
    ├── middleware/
    │   ├── errorHandler.js       # Global Centralized Error Handler
    │   ├── notFound.js           # 404 Route Handler
    │   └── validateContact.js    # Express-Validator Input Rules
    ├── models/
    │   └── Contact.js            # Mongoose Contact Document Schema
    ├── routes/
    │   ├── contactRoutes.js      # /api/contact Endpoint Handler
    │   └── healthRoutes.js       # / & /health Endpoint Handlers
    └── services/
        └── emailService.js       # SMTP Nodemailer Transporter Service
```

---

## 🔑 Environment Variables (`backend/.env`)

Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/devportfoliox

# Email SMTP Settings (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=pankaj738074@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=pankaj738074@gmail.com
```

---

## 🔌 API Endpoints

### 1. Server Health Check
- **GET** `/` or `/health`
- **Response**:
```json
{
  "status": "OK",
  "message": "DevPortfolioX Backend Running",
  "timestamp": "2026-08-10T10:00:00.000Z"
}
```

### 2. Send Contact Message
- **POST** `/api/contact`
- **Body**:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "DevOps Role Inquiry",
  "message": "Hi Pankaj, we would love to connect with you regarding a Cloud Engineer position."
}
```
- **Response (201 Created)**:
```json
{
  "success": true,
  "message": "Message sent successfully 🚀",
  "data": {
    "id": "66b6c0000000000000000000",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "DevOps Role Inquiry",
    "createdAt": "2026-08-10T10:00:00.000Z"
  }
}
```

---

## 🚀 Running Locally

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server with nodemon
npm run dev

# Or start production node server
npm start
```

Server will start on `http://localhost:5000`.
