import { Link } from "react-router-dom";

import { useUserStore } from "../../stores/userStore";

import "./Navbar.css";

function Navbar() {
  const { user } = useUserStore();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        {user ? (
          <li className="navbar-item">
            <Link to="/profile" className="navbar-link">
              Profile
            </Link>
          </li>
        ) : (
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          </li>
        )}
      </ul>
      <div className="navbar-brand">My Website</div>
    </nav>
  );
}

export default Navbar;
