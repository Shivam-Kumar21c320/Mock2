// src/components/UserDetails.js
import React, { useEffect, useState } from 'react';

const UserDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://localhost:7186/api/Student') // Replace with your actual backend URL
      .then(response => response.json())
      .then(data => setUser(data[0])) // Assuming the response is an array
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>User Details</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Date of Birth:</strong> {new Date(user.dateOfBirth).toLocaleDateString()}</p>
    </div>
  );
};

export default UserDetails;

