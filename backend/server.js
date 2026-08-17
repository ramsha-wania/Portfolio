require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://portfolio-1-8o7c.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Transporter ek hi baar banao, har request pe nahi
// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD
//   }
// });

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.post("/contact", async (req, res) => {
console.log("USER:", process.env.GMAIL_USER);
console.log("PASS LOADED:", !!process.env.EMAIL_PASSWORD);
  const { name, email, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ success: false, message: "Email and message are required" });
  }

  try {
    // await transporter.sendMail({
    //   from: process.env.GMAIL_USER,
    //   to: "tparveen12688@gmail.com",
    //   subject: "New Portfolio Contact Message",
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    // });

    res.json({ success: true, message: "Message received successfully!" });
  } catch (error) {
    console.error("Submit Error:", error.message);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
