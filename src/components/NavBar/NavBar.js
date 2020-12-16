import './NavBar.scss';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const items = {
  id: '00',
  active: true,
  options: [
    {
      label: 'Service1'
    },
    {
      label: 'Service 2'
    },
    {
      label: 'Service 3',
      isDropdown: true
    }
  ],
  sub: {
    id: '01',
    // parentPath: { id: '00', index: '2' },
    active: false,
    options: [
      {
        label: 'Service1'
      },
      {
        label: 'Service 2'
      },
      {
        label: 'Service 3',
        isDropdown: true
      }
    ],
    sub: {
      id: '02',
      // parentPath: { id: '01', index: '2' },
      active: false,
      options: [
        {
          label: 'Service1'
        },
        {
          label: 'Service 2'
        },
        {
          label: 'Service 3'
        }
      ]
    }
  }
};

const menuItems = [
  {
    label: 'HOME'
  },
  {
    label: 'ABOUT'
  },
  {
    label: 'SERVICE',
    dropdownItems: items
  },
  {
    label: 'GALLERY'
  },
  {
    label: 'CONTACT'
  }
];

const NavBar = () => (
  <div className="container">
    <div className="logo-container">
      <Link className="navbar-logo">Atomic</Link>
    </div>
    <div className="nav-container">
      <nav className="navbar">
        <div className="menu-icon">
          <i className="ion-close" />
        </div>
        <ul className="nav-menu">
          {menuItems.map(({ label, dropdownItems }) => (
            dropdownItems
              ? (
                <li key={'key-' + label} className="nav-item">
                  <Link to="/" className="nav-links">
                    {label}
                  </Link>
                  <span>
                    <i className="ion-chevron-up" />
                  </span>
                  <Dropdown items={dropdownItems} />
                </li>
                )
              : (
                <li key={'key-' + label} className="nav-item">
                  <Link to="/" className="nav-links">
                    {label}
                  </Link>
                </li>
                )
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

export default NavBar;
