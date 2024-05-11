import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  name: { type: String},
  number: { type: String},
  email: { type: String},
  guests: { type: Number},
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
