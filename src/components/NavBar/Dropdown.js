import React, { useState } from "react";
import "./Dropdown.scss";

function Dropdown() {
  return (
      <ul className='subMenu_1'>
        <li><a href="#">Service1</a></li>
        <li><a href="#">Service2</a></li>
        <li className='active-link_1'>
        <a href="#">Service3 <i className="ion-chevron-right"></i></a>
          <ul className='subMenu_2'>
            <li><a href="#">Service1</a></li>
            <li><a href="#">Service2</a></li>
            <li className='active-link_2'>
            <a href="#">Service3 <i className="ion-chevron-right"></i></a>
              <ul className='subMenu_3'>
                <li><a href="#">Service1</a></li>
                <li><a href="#">Service2</a></li>
                <li><a href="#">Service3</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
  );
}

export default Dropdown;
