import React from "react";
import { Link } from "react-router-dom";
import './Logotype.css';

import logo from "../../images/Logotype.svg";
function Logotype({ link, modStyle }) {

  return(
    <Link className={`${modStyle.position} hover-opacity`} to={link}>
      <img className={`logotype`} src={logo} alt="Логотип проекта"/>
    </Link>
  )
}

export default Logotype;
