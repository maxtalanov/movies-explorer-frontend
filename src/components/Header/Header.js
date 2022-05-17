import React from "react";
import Logotype from "../Logotype/Logotype";
import './Header.css';

function Header({ theme, children }) {

  return(
    <header className={`header header_theme_${theme}`} >
      <Logotype link='/' modStyle=''/>
      {children}
    </header>
  )
}

export default Header;
