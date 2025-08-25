import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getStudentById } from '../api';
import UpdatedStudent from './UpdatedStudent';

const UpdateStudentWrapper = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await getStudentById(id);
        setStudent(res.data);
      } catch (err) {
        console.error('Error fetching student:', err);
        setError('Failed to load student. Please check the ID or try again later.');
      }
    };
    fetchStudent();
  }, [id]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!student) return <p>Loading...</p>;

  return (
    <UpdatedStudent
      student={student}
      onUpdateComplete={() => (window.location.href = '/students')}
    />
  );
};

export default UpdateStudentWrapper;
