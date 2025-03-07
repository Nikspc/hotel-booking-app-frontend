import React, { useState } from 'react';
import { register } from '../services/api';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await register({ email, password });
      alert('Registered Successfully');
    } catch (err) {
      alert('Registration Failed');
    }
  };

  return (
    <div className="p-5">
      <input className="border p-2" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 mt-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 mt-3" onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;