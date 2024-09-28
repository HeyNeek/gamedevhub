import { Link } from "react-router-dom";
import "./Navbar.css";

interface INavbarProps {
  user: User | undefined;
}

function Navbar({ user }: INavbarProps) {
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
