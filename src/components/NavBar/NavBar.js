import './NavBar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

export const NavBar = () => {
  const [isMenuActive, setMenuState] = useState(false);
  const [isDropDownActive, setDropDownVisibility] = useState(false);

  const toggleMobileMenu = () => setMenuState(!isMenuActive);
  const closeMobileMenu = () => setMenuState(false);

  const onMouseEnter = () => {
    setDropDownVisibility(window.innerWidth >= 960);
  };

  const onMouseLeave = () => {
    setDropDownVisibility(false);
  };

  return (
    <div className="container">
      <div className="logo-container">
        <Link className="navbar-logo">Atomic</Link>
      </div>
      <div className="nav-container">
        <nav className="navbar">
          <div className="menu-icon" onisMenuActive={toggleMobileMenu}>
            <i className={isMenuActive ? 'ion-close' : 'ion-android-menu'} />
          </div>
          <ul className={isMenuActive ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onisMenuActive={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                ABOUT
              </Link>
            </li>
            <li
              className={`nav-item ${setDropDownVisibility ? 'mobileNav' : ''}`}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="/service" className="nav-links">
                SERVICES
              </Link>
              <span onisMenuActive={() => setDropDownVisibility(!isDropDownActive)}>
                <i
                  className={isDropDownActive ? 'ion-chevron-up' : 'ion-chevron-down'}
                />
              </span>
              {isDropDownActive && <Dropdown />}
            </li>
            <li className="nav-item" onisMenuActive={closeMobileMenu}>
              <Link to="/" className="nav-links">
                GALLERY
              </Link>
            </li>
            <li className="nav-item" onisMenuActive={closeMobileMenu}>
              <Link to="/" className="nav-links">
                BLOG
              </Link>
            </li>
            <li className="nav-item" onisMenuActive={closeMobileMenu}>
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
