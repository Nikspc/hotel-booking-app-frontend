import React, { useState } from 'react';
import { webCheckin } from '../services/api';

function WebCheckin({ bookingId }) {
  const [family, setFamily] = useState([{ name: '', aadhaar: '' }]);

  const handleCheckin = async () => {
    const token = localStorage.getItem('token');
    await webCheckin(bookingId, { family }, token);
    alert('Checked-In Successfully');
  };

  return (
    <div>
      {family.map((member, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              const updated = [...family];
              updated[index].name = e.target.value;
              setFamily(updated);
            }}
          />
          <input
            type="text"
            placeholder="Aadhaar"
            onChange={(e) => {
              const updated = [...family];
              updated[index].aadhaar = e.target.value;
              setFamily(updated);
            }}
          />
        </div>
      ))}
      <button onClick={handleCheckin}>Web Check-in</button>
    </div>
  );
}

export default WebCheckin;