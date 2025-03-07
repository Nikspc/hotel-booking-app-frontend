import React, { useState } from 'react';
import { bookHotel } from '../services/api';

function HotelBooking() {
  const [hotelName, setHotelName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [family, setFamily] = useState([{ name: '', aadhaar: '' }]);
  const hotels = ['Taj Hotel', 'Leela Palace', 'ITC Grand'];

  const handleBooking = async () => {
    const token = localStorage.getItem('token');
    await bookHotel({ hotelName, checkInDate, checkOutDate, family }, token);
    alert('Hotel Booked Successfully');
  };

  return (
    <div>
      <select onChange={(e) => setHotelName(e.target.value)}>
        <option>Select Hotel</option>
        {hotels.map((hotel, index) => (
          <option key={index} value={hotel}>{hotel}</option>
        ))}
      </select>
      <input type="date" onChange={(e) => setCheckInDate(e.target.value)} />
      <input type="date" onChange={(e) => setCheckOutDate(e.target.value)} />
      <button onClick={handleBooking}>Book Hotel</button>
    </div>
  );
}

export default HotelBooking;