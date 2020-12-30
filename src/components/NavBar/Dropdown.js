import { useState } from 'react';
import './Dropdown.scss';

function Dropdown() {
  const statusList = [false, false];
  const [dropdown, setDropdownVisiblity] = useState(statusList);

  const clickHandler = (index) => {
    statusList[index] = !statusList[index];
    setDropdownVisiblity(statusList);
  };

  return (
    <ul className="sub-menu main">
      <li>
        <a href="#">Service1</a>
      </li>
      <li>
        <a href="#">Service2</a>
      </li>
      <li className="active-link">
        <a href="#">Service3</a>
        <span
          onClick={() => clickHandler(0)}
          className={dropdown[0] && 'active'}
        >
          <i className="ion-chevron-right" />
        </span>
        <ul className="sub-menu">
          <li>
            <a href="#">Service1</a>
          </li>
          <li>
            <a href="#">Service2</a>
          </li>
          <li className="active-link">
            <a href="#">Service3</a>
            <span
              onClick={() => clickHandler(1)}
              className={dropdown[1] && 'active'}
            >
              <i className="ion-chevron-right" />
            </span>
            <ul className="sub-menu">
              <li>
                <a href="#">Service1</a>
              </li>
              <li>
                <a href="#">Service2</a>
              </li>
              <li>
                <a href="#">Service3</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Dropdown;
