import React from "react";
import './NavButton.css';

import { Link } from "react-router-dom";

function NavButton() {

  return (
    <nav className="nav-button">
      <Link to='/signup' className='hover-opacity'>
        <button className="nav-button__btn-signup button__reset">Регистрация</button>
      </Link>
      <Link to='/signin' className='hover-opacity'>
        <button className="nav-button__btn-signing button__reset">Вход</button>
      </Link>
    </nav>
  );
}

export default NavButton;
