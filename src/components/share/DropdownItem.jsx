import React from "react";
import { Link } from "react-router-dom";
import "./DropdownItem.modules.css";

const DropdownItem = ({ img, text }) => {
  return (
    <div className="dropdownItem">
      <img src={img} alt="" />
      <li>
        <Link>{text}</Link>
      </li>
    </div>
  );
};

export default DropdownItem;
