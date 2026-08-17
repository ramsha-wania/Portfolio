require("dotenv").config();
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();


app.use(express.json());
app.use(cors({
  origin: "https://portfolio-1-8o7c.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.post("/contact", async (req, res) => {
    console.log(req.body);

    // const messages = JSON.parse(
    //     fs.readFileSync("messages.json")
    // );

    // messages.push(req.body);
    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "ramshawansari@gmail.com",
                pass: "zuhj hkro pyxp ejps"
            }
        });

        console.log(transporter)

        const checkCOnd = await transporter.sendMail({
            from: "ramshawansari@gmail.com",
            to: "vishalkumarvkm93@gmail.com",
            subject: "New Portfolio Contact Message",
            text: `Check`
        });
        console.log(checkCOnd)
    }
    catch (error) {
        console.log("issue with send mail")
        console.log("Submit Error", error)
    }


    // fs.writeFileSync(
    //     "messages.json",
    //     JSON.stringify(messages, null, 2)
    // );

    res.json({
        success: true,
        message: "Message received successfully!"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
