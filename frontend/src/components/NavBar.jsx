import { Link } from "react-router-dom";

const NaveBar = () => {
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
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NaveBar
