import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="custom-navbar">
      <div className="navbar-buttons">
        <Link to="/" className="navbar-btn">Home</Link>
        <Link to="/contact" className="navbar-btn">Contact</Link>
        <Link to="/weather" className="navbar-btn">Weather</Link>
        <Link to="/students/create" className="navbar-btn">Create Student</Link>
        <Link to="/students/history" className="navbar-btn">Student History</Link>
        <Link to="/user-details" className="navbar-btn">User Details</Link>
      </div>
    </div>
  );
}

export default Navbar;

 
 