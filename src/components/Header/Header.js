import React from "react"; //Инициализация библиотеки (не обязательное действие)

import './Header.css';
import Logotype from "../Logotype/Logotype"; //Инициализация стилей

function Header({ theme, children }) {

  return(
    <header className={`header header_theme_${theme}`} >
      <Logotype link='/'/>
      {children}
    </header>
  )
}

export default Header;
