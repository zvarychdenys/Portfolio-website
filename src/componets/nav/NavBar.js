import "./style.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const handleClick = (event) => {
    console.log(`${event.target.text} pasek został kliknięty`);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Data Analyst/BI developer </strong> Denys Zvarych
          </NavLink>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className="nav-list__link" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Projects"
                className="nav-list__link"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contacts"
                className="nav-list__link"
                onClick={handleClick}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
