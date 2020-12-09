import "./NavBar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const changeState = () => {
    if(window.innerWidth < 960) {
      setDropdown(true)
      console.log('mobiile');
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <div className="container">
      <div className="logo-container">
        <Link className="navbar-logo">Atomic</Link>
      </div>
      <div className="nav-container">
        <nav className="navbar">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "ion-close" : "ion-android-menu"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                ABOUT
              </Link>
            </li>
            <li
              className={`nav-item ${setDropdown ? 'mobileNav' : "" }`}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={changeState}
            >
              <Link
                to="/service"
                className="nav-links"
              >
                SERVICES <span><i className="ion-chevron-down"></i></span>
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/" className="nav-links">
                GALLERY
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/" className="nav-links">
                BLOG
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/" className="nav-links">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
