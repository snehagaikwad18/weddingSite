import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./db.js";
import Contact from "./models/contact.model.js";
import Booking from "./models/booking.model.js";
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


app.get('/api/bookings/:date', async (req, res) => {
  const date = req.params.date;
  try {
    const booking = await Booking.findOne({ date });
    res.json(booking);
  } catch (error) {
    console.error('Error fetching booking data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Book a date
app.post('/api/bookings', async (req, res) => {
  const { date, name, number, email, guests } = req.body;
  // Assume validation here

  try {
    const existingBooking = await Booking.findOne({ date });
    if (existingBooking) {
      return res.status(400).json({ message: 'Date already booked.' });
    }
    const newBooking = new Booking({ date, name, number, email, guests });
    await newBooking.save();
    res.status(201).json({ message: 'Booking successful.' });
  } catch (error) {
    console.error('Error booking date:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Cancel a booking
app.delete('/api/bookings/:date', async (req, res) => {
  const date = req.params.date;
  try {
    const deletedBooking = await Booking.findOneAndDelete({ date });
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found.' });
    }
    res.json({ message: 'Booking canceled.' });
  } catch (error) {
    console.error('Error canceling booking:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all the bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find({});
    const bookingDates = bookings.map(booking => booking.date);
    res.json(bookingDates);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Internal Serve error' });
  }
})