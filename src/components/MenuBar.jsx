import React from "react";
import NavLink from "./NavLink";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="menu">
        <li className="search-box">
          <i className="bx bx-search icon"></i>
          <input type="text" placeholder="Buscar..." />
        </li>

        <ul className="menu-links">
          <NavLink
            iconClass="bx bx-home-alt icon"
            text="Inicio"
            url="#"
          />
          <NavLink
            iconClass="bx bx-bar-chart-alt-2 icon"
            text="Comparar"
            url="#"
          />
          <NavLink iconClass="bx bx-bell icon" text="Notifications" url="#" />
          <NavLink
            iconClass="bx bx-pie-chart-alt icon"
            text="Estadisticas"
            url="#"
          />
          <NavLink iconClass="bx bx-heart icon" text="Favoritos" url="#" />
          <NavLink iconClass="bx bx-wallet icon" text="Saldo" url="#" />
        </ul>
      </div>

    
    </div>
  );
};

export default MenuBar;
