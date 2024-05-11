import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [bookingDataAll, setBookingDataAll] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    fetchData(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    fetchAllBookings();
  }, []);

  const fetchAllBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/bookings');
      setBookingDataAll(response.data);
    } catch (error) {
      console.error('Error fetching all booking data:', error);
    }
  };

  const fetchData = async (date) => {
    if (date) {
      try {
        const response = await axios.get(`http://localhost:8080/api/bookings/${date}`);
        setBookingData(response.data);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const handleBookDate = async () => {
    try {
      await axios.post('http://localhost:8080/api/bookings', { date: selectedDate });
      console.log('Booking successful');
      fetchData(selectedDate);
    } catch (error) {
      console.error('Error booking date:', error);
    }
  };

  const handleCancelBooking = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/bookings/${selectedDate}`);
      console.log('Booking canceled');
      fetchData(selectedDate);
    } catch (error) {
      console.error('Error canceling booking:', error);
    }
  };

  const generateCalendarDays = () => {
    const daysInMonth = [];
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1);
    const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - startDate.getDay()); // Start from previous month's last Sunday

    while (startDate <= lastDayOfMonth) {
      daysInMonth.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    return daysInMonth;
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="container mx-auto mt-8" style={{ maxWidth: '80%' }}>
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="month">Select Month:</label>
          <select id="month" value={selectedMonth} onChange={handleMonthChange}>
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </select>
          <select value={selectedYear} onChange={handleYearChange}>
            <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
            <option value={new Date().getFullYear() + 1}>{new Date().getFullYear() + 1}</option>
          </select>
        </div>
        <div className="text-lg font-semibold">{calendarDays[0].toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((date, index) => (
          <div
            key={index}
            className={`cursor-pointer p-2 border ${
              selectedDate && selectedDate.toDateString() === date.toDateString() ? 'bg-gray-300' : ''
            } ${
              bookingDataAll && bookingDataAll.includes(date.toISOString()) ? 'bg-red-500 text-white' : ''
            }`}
            onClick={() => handleDateClick(date)}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
      {selectedDate && (
        <div className="mt-4 flex">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Selected Date: {selectedDate.toDateString()}</h2>
            {bookingDataAll && bookingDataAll.includes(selectedDate.toISOString()) ? (
              <div className="mt-4">
                <button
                  onClick={handleCancelBooking}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Cancel Booking
                </button>
              </div>
            ) : (
              <div className="mt-4">
                <button
                  onClick={handleBookDate}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Book Date
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCalendar;
