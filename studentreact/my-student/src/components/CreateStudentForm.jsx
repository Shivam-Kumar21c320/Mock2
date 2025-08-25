// src/components/CreateStudentForm.js
import React, { useState } from 'react';
import { createStudent } from '../api';

import './CreateStudentForm.css';

export default function CreateStudentForm({ onStudentCreated }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', dateOfBirth: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createStudent(form);
    onStudentCreated(); // Refresh history
    setForm({ firstName: '', lastName: '', email: '', dateOfBirth: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
      <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="dateOfBirth" type="date" value={form.dateOfBirth} onChange={handleChange} required />
      <button type="submit">Create Student</button>
    </form>
  );
}
