require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://portfolio-1-8o7c.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

const resend = new Resend("re_RomJFR1s_6EUfibA2JrVrWPj7Rgr7iEWs");

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ success: false, message: "Email and message are required" });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vishalkumarvkm93@gmail.com",
      subject: "New Portfolio Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

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
