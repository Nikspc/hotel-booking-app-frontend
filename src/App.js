import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HotelBooking from './components/HotelBooking';
import WebCheckIn from './components/WebCheckIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1 className="text-center text-3xl p-10">Welcome to Hotel Booking</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-hotel" element={<HotelBooking />} />
        <Route path="/web-checkin" element={<WebCheckIn />} />
      </Routes>
    </Router>
  );
}

export default App;
