import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css"; // Import CSS

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Check if token exists
  }, []);

  const handleSignout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Product App</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}

          {!isLoggedIn && (
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          )}
          {isLoggedIn && (
            <button className="signout-btn" onClick={handleSignout}>
              Sign Out
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
