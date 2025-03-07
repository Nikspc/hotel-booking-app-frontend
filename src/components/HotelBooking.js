import React, { useState, useEffect } from 'react';
import { fetchHotels, bookHotel } from '../services/api';

function HotelBooking() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data } = await fetchHotels();
      setHotels(data);
    }
    fetchData();
  }, []);

  const handleBooking = async () => {
    await bookHotel({ hotelName: selectedHotel });
    alert('Hotel Booked Successfully');
  };

  return (
    <div className="p-5">
      <h2>Select Hotel</h2>
      <select onChange={(e) => setSelectedHotel(e.target.value)}>
        {hotels.map((hotel) => (
          <option key={hotel.id} value={hotel.name}>{hotel.name} - {hotel.location}</option>
        ))}
      </select>
      <button className="bg-blue-500 text-white p-2 mt-3" onClick={handleBooking}>Book Hotel</button>
    </div>
  );
}

export default HotelBooking;