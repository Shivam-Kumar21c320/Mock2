import { useState } from 'react';
import axios from 'axios';

const UpdatedStudent = ({ student, onUpdateComplete }) => {
  const [formData, setFormData] = useState({
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    dateOfBirth: student.dateOfBirth?.split('T')[0], // format for input[type="date"]
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7186/api/Student/${student.id}`, formData);
      alert('Student updated successfully!');
      onUpdateComplete();
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Failed to update student.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
      <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} />
      <button type="submit">Update Student</button>
    </form>
  );
};

export default UpdatedStudent;


