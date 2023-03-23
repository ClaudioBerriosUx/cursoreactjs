import React from "react";

const Header = () => {
  function loadScript() {
    const script = document.createElement("script");
    script.src = "src/script.js";
    script.async = true;
    document.body.appendChild(script);
  }

  return (
    <header onLoad={loadScript}>
      <div className="image-text">
        <span className="image">
          <img src="logo.png" alt="" />
        </span>

        <div className="text logo-text">
          <span className="name">Cars</span>
          <span className="profession">E-commerce </span>
        </div>
      </div>

      <i className="bx bx-chevron-right toggle"></i>
    </header>
  );
};

export default Header;