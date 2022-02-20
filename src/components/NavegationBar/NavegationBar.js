import { Link } from "react-router-dom";
import "./NavegationBar.css";

const NavegationBar = () => {
  return (
    <nav className="navegation-bar">
      <ul className="navegation-bar__list">
        <li className="navegation-bar__item">
          <Link to="/home">
            <span className="navegation__text">Home</span>
          </Link>
        </li>

        <li className="navegation-bar__item glass">
          <Link to="/robots">
            <span className="navegation__text">Museum</span>
          </Link>
        </li>

        <li className="navegation-bar__item">
          <Link to="/robots/create">
            <span className="navegation__text">Create</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavegationBar;
