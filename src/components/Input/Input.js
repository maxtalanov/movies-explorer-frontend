// Прототип инпутов

import React from "react";
import "./Input.css";

// ф-ый компонент
function Input({ label, type, placeholder, errMassage, err }) {

  return(
    <>
      <label className={`form__label`}>{label}</label>
      <input className={`form__input form__input-err`} type={type} placeholder={placeholder}/>
      <span className={`form__span ${err}`}>{errMassage}</span>
    </>

  );
}

export default Input;
