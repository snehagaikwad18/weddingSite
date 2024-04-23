import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./db.js";
import Contact from "./models/contact.model.js";
dotenv.config();
connectToDatabase();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.post("/contacts", async (req, res) => {
  try {
    const { name, email, message , phone } = req.body;
    const newContact = new Contact({ name, email, message , phone });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/contacts", async (req, res) => {
    try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
