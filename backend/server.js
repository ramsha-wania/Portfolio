require("dotenv").config();
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.post("/contact", async (req, res) => {
    console.log(req.body);

    const messages = JSON.parse(
        fs.readFileSync("messages.json")
    );

    messages.push(req.body);
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
    user: "ramshawansari@gmail.com",
    pass: process.env.EMAIL_PASSWORD
}
});

await transporter.sendMail({
    from: "ramshawansari@gmail.com",
    to: "ramshawansari@gmail.com",
    subject: "New Portfolio Contact Message",
    text: `
Name: ${req.body.name}
Email: ${req.body.email}

Message:
${req.body.message}
`
});

    fs.writeFileSync(
        "messages.json",
        JSON.stringify(messages, null, 2)
    );

    res.json({
        success: true,
        message: "Message received successfully!"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});