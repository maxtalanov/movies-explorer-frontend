import React from "react"; //Инициализация библиотеки (не обязательное действие)
import { Link } from "react-router-dom";

import './Logotype.css'; //Инициализация стилей

import logo from "../../images/Logotype.svg";
function Logotype({ link, modStyle }) {

  return(
    <Link className={`${modStyle.position} hover-opacity`} to={link}>
      <img className={`logotype`} src={logo} alt="Логотип проекта"/>
    </Link>
  )
}

export default Logotype;
