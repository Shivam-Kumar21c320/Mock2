import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Weather from './components/Weather';
import CreateStudentForm from './components/CreateStudentForm';
import StudentHistory from './components/StudentHistory';
import UserDetails from './components/UserDetails';
import UpdateStudentWrapper from './components/UpdateStudentWrapper';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-main">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/students/create" element={<CreateStudentForm />} />
            <Route path="/students/history" element={<StudentHistory />} />
            <Route path="/students/update/:id" element={<UpdateStudentWrapper />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;



 
