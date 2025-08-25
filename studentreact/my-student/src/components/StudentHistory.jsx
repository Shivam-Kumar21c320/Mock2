// src/components/StudentHistory.js
import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../api';
import { useNavigate } from 'react-router-dom';
import './StudentHistory.css';

export default function StudentHistory() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  const handleEdit = (id) => {
    navigate(`/students/update/${id}`);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="student-history-container">
      <h2>Student History</h2>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id}>
            <span><strong>Name:</strong> {student.firstName} {student.lastName}</span>
            <span><strong>Email:</strong> {student.email}</span>
            <span><strong>Date of Birth:</strong> {student.dateOfBirth}</span>
            <div className="actions">
              <button onClick={() => handleDelete(student.id)}>Delete</button>
              <button onClick={() => handleEdit(student.id)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

