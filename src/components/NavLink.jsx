import React from "react";

const NavLink = ({ iconClass, text, url }) => {
  return (
    <li className="nav-link">
      <a href={url}>
        <i className={iconClass}></i>
        <span className="text nav-text">{text}</span>
      </a>
    </li>
  );
};

export default NavLink;
