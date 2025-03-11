import { Link } from "react-router-dom";

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
      </div>
    )
}

export default Home
