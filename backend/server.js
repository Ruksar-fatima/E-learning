
// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple routes
app.get("/", (req, res) => {
  res.send("Welcome to the E-Learning Backend API 🚀");
});

app.get("/api/courses", (req, res) => {
  const courses = [
    { id: 1, title: "HTML & CSS Basics", description: "Learn web fundamentals." },
    { id: 2, title: "JavaScript Essentials", description: "Learn core JS concepts." },
    { id: 3, title: "Node.js API Development", description: "Build APIs with Node & Express." }
  ];
  res.json(courses);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

