# CrackItHub 🎯
> Personalized JEE/NEET Preparation Platform  
> 🚀 Built as part of the NSS, IIT Roorkee Open Project

## 🌟 Overview

**CrackItHub** is a full-stack web platform designed to simulate real JEE/NEET test environments. It enables students to take subject-wise mock tests, track their performance with deep analytics, and prepare efficiently with personalized feedback.  

🧠 Built to improve learning outcomes by providing a realistic, adaptive, and engaging testing experience for aspirants.

---

## 🧩 Key Features

### 🎯 Realistic Test Interface
- Timer-synced exams with subject switching  
- Color-coded question statuses (Attempted, Skipped, Marked for Review)  
- Auto-save answers and visual test progress

### 📊 Performance Analytics
- Subject-wise scores and time per question  
- Topic-level visual insights (charts/graphs)  
- Identify weak areas and get actionable feedback

### 📅 Smart Planning Tools
- Test calendar with syllabus-linked reminders  
- Test history, bookmarks, and previous year question (PYQ) access  
- Review completed tests and answers

### 🛠️ Admin Tools
- Bulk upload of questions (CSV/JSON)  
- Custom test creation  
- Student-specific result tracking and feedback management

---

## 👨‍💻 Tech Stack

| Layer         | Tech Used                            |
|--------------|---------------------------------------|
| Frontend     | React.js, Tailwind CSS                |
| Backend      | Node.js, Express                      |
| Database     | MongoDB (Mongoose ODM)                |
| API Testing  | Postman                               |
| Charts       | Chart.js / Recharts                   |
| Deployment   | Render / Vercel |

---

## 📦 Installation

### ⚙️ Prerequisites
- Node.js (v16+)
- MongoDB Atlas / Local MongoDB
- Git

### 🛠️ Setup

```bash
git clone https://github.com/moodyadi2006/Crackit.git
cd Crackit
````

#### Backend

```bash
cd backend
npm install
# Add a .env file with:
# MONGODB_URI=
# JWT_SECRET=
npm run dev
```

#### Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Visit: `http://localhost:5173` in your browser.

---

## 🔍 Folder Structure

```
Crackit/
├── backend/
│   ├── controllers/
│   ├── models/
│   └── routes/
├── frontend/
│   ├── components/
│   ├── pages/
│   └── utils/
```

---

## 🌐 Live Demo

🔗 [CrackItHub](https://crackit-1.onrender.com/)

---

## ✍️ Authors & Contributions

* 👨‍💻 [Aditya Singh](https://github.com/moodyadi2006)
* 📢 NSS Open Project Team, IIT Roorkee

---

