
import axios from 'axios';

const API_BASE = 'https://localhost:7186/api/Student';

export const createStudent = (student) => axios.post(API_BASE, student);
export const getStudents = () => axios.get(API_BASE);
export const deleteStudent = (id) => axios.delete(`${API_BASE}/${id}`);
export const updateStudent = (id, data) => axios.put(`${API_BASE}/${id}`, data);
export const getStudentById = (id) => axios.get(`${API_BASE}/${id}`);


