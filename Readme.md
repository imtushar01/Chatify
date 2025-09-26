# ✨ Full-Stack Chat App with Auth & Emails ✨

[Live Demo](https://chatify-9463a.sevalla.app/)

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Highlights
- 🔐 Custom JWT Authentication
- ⚡ Real-time Messaging (Socket.io)
- 🟢 Presence (online/offline)
- 🔔 Notification & typing sounds
- 📨 Welcome emails via Resend (Resend API)
- 🗂️ Image uploads (Cloudinary)
- 🧰 REST API: Node.js + Express
- 🧱 MongoDB data store
- 🚦 Rate-limiting via Arcjet
- 🎨 React + Tailwind + DaisyUI
- 🧠 Zustand for state
- 🚀 Easy deployment (free-tier friendly)

## Project structure

---

## 🔧 Backend Setup (`/backend`)
### ⚙️ Environment Variables (`.env`)
```env
PORT=3000
MONGO_URI=your_mongo_uri_here
NODE_ENV=development
JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development

cd backend
npm install
npm run dev

cd frontend
npm install
npm run dev

