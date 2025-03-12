import { Link } from "react-router-dom";
import "../App.css"; // Import CSS

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Product Management App</h1>
      <p>Manage your products easily with our simple interface.</p>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/changepassword">
        <button>change Password</button>
      </Link>
    </div>
  );
};

export default Home;
