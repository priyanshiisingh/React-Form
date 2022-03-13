require("dotenv").config();
import axios from "axios";
var req: any;

// Extract token
const { formData, captchaToken } = req.body;
const key = process.env.YOUR_PRIVATE_KEY;

// Call Google's API to get score
const res = async () => {
  await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${key}&response=${captchaToken}`
  );
};

// Extract result from the API response
if (res.data.success) console.log("Human");
else console.log("BOT!!!");
