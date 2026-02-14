# 🚀 Tasks Generator – Frontend

## 📌 Overview

This is the frontend application for the *Tasks Generator* mini planning tool.

The application allows users to:

- Fill a feature specification form (goal, users, constraints, template)
- Generate structured user stories and engineering tasks
- Edit generated tasks
- Copy or download the result as Markdown
- View the last 5 generated specs
- Check backend and LLM health status

---

## 🛠 Tech Stack

- React (Vite)
- TypeScript
- TailwindCSS
- Axios
- React Router

---

## ⚙️ How to Run Locally

### 1️⃣ Install Dependencies

bash
npm install


---

### 2️⃣ Configure Environment Variables

Create a .env file in the root of the frontend folder.

For *local backend*:

env
VITE_API_URL=http://localhost:8000


For *production backend*:

env
VITE_API_URL=https://task-generator-backend.onrender.com


---

### 3️⃣ Start Development Server

bash
npm run dev


The application will run at:


http://localhost:5173


---

## ✅ Features Implemented

- Feature specification form (title, goal, users, constraints, template type)
- Integration with FastAPI backend
- LLM-powered task generation
- Editable generated output
- Copy-to-clipboard with visual feedback
- Download output as Markdown
- History page (last 5 generated specs)
- System status page (backend + LLM health check)
- Basic input validation (goal required)
- Loading states
- Responsive UI with TailwindCSS
- Environment-based API configuration

---

## ⚠️ Not Implemented / Known Limitations

- No authentication or user accounts
- No drag-and-drop task reordering
- No markdown preview renderer
- No pagination for history
- No advanced retry/error handling
- No automated tests
- No role-based access control
- No rate limiting handling

---

## 🧱 Project Structure


src/
 ├── api/              # API layer (Axios configuration)
 ├── components/       # Reusable UI components
 ├── pages/            # Home, History, Status pages
 ├── types/            # TypeScript type definitions
 ├── App.tsx           # Router configuration
 └── main.tsx          # Application entry point


---

## 🌍 Deployment

Frontend is deployed using:

- *Vercel* (Frontend hosting)
- *Render* (Backend hosting)
- *Supabase* (Database)