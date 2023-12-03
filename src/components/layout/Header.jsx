import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="header__left">
        <ul>
          <li>
            <Link to="/about">About</Link>
            <Link to="/reference">Reference</Link>
          </li>
        </ul>
      </div>
      <h1 className="header__center">
<<<<<<< HEAD
        <Link to="/">API site</Link>
=======
        <Link to="/">API Factory</Link>
>>>>>>> 6f4d3d0dd7da6b4ad11091fce0f5d4da5e65c72e
      </h1>
      <div className="header__right">
        <ul>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            <Link to="/unsplash">Unsplash</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
