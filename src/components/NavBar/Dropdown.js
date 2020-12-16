import React, { useState } from 'react';
import './Dropdown.scss';

function Dropdown() {
  const [closeSub, setSubState] = useState(false);
  const [closeSubSub, setSubSubState] = useState(false);

  const changeSubState = e => {
    e.preventDefault();
    setSubState(!closeSub);
  };

  const changeSubSubState = e => {
    e.preventDefault();
    setSubSubState(!closeSubSub);
  };

  return (
    <ul className="sub-menu main">
      <li>
        <a href="#">Service1</a>
      </li>
      <li>
        <a href="#">Service2</a>
      </li>
      <li className="active-link" id="first-link">
        <a href="#">Service3</a>
        <span
          onClick={changeSubState}
          className={closeSub ? 'showSubMenu' : 'closeSubMenu'}
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
          <li className="active-link" id="second-link">
            <a href="#">Service3</a>
            <span
              onClick={changeSubSubState}
              className={closeSubSub ? 'showSubSubMenu' : 'closeSubSubMenu'}
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
