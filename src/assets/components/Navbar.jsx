import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { FaHome, FaHeart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-links">
          <FaHome />
        </Link>
        <Link to="/favorite" className="nav-links">
          <FaHeart />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
