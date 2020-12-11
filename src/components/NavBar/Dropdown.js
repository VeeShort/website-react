import React, { useState } from "react";
import "./Dropdown.scss";

function Dropdown() {
  const [closeSub, setSubState] = useState(false);
  const [closeSubSub, setSubSubState] = useState(false);

  const changeSubState = e => {
    e.preventDefault();
    setSubState(!closeSub);
    console.log(closeSub);
  };

  const changeSubSubState = e => {
    e.preventDefault();
    setSubSubState(!closeSubSub);
    console.log(closeSubSub);
  };

  return (
    <ul className="subMenu_1">
      <li>
        <a href="#">Service1</a>
      </li>
      <li>
        <a href="#">Service2</a>
      </li>
      <li className="active-link_1">
        <a href="#">Service3</a>
        <span
          onClick={changeSubState}
          className={closeSub ? "showSubMenu" : "closeSubMenu"}
        >
          <i className="ion-chevron-right"></i>
        </span>
        <ul className="subMenu_2">
          <li>
            <a href="#">Service1</a>
          </li>
          <li>
            <a href="#">Service2</a>
          </li>
          <li className="active-link_2">
            <a href="#">Service3</a>
            <span
              onClick={changeSubSubState}
              className={closeSubSub ? "showSubSubMenu" : "closeSubSubMenu"}
            >
              <i className="ion-chevron-right"></i>
            </span>
            <ul className="subMenu_3">
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