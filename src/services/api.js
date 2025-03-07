import axios from 'axios';
const API_URL = 'http://localhost:4000';

export const register = (data) => axios.post(`${API_URL}/auth/register`, data);
export const login = (data) => axios.post(`${API_URL}/auth/login`, data);
export const fetchHotels = () => axios.get('/json/hotels.json');
export const bookHotel = (data) => axios.post(`${API_URL}/bookings`, data);
export const webCheckin = (data) => axios.post(`${API_URL}/checkin`, data);