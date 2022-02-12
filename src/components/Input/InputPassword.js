import React from "react";
import "./Input.css";

// ф-ый компонент
function InputPassword ({ label, placeholder, id, name, value, onChange, errMassage, err,}) {

  return(
    <>
      <label className={`form__label`}>{label}</label>
      <input
        className={`form__input form__input-err`}
        placeholder={placeholder}
        type="password"

        id={id}
        name={name}
        value={value}
        onChange={onChange}

        pattern="[A-Za-z0-9]{8,30}"
        minLength={8}
        autoComplete="off"
        required
      />
      <span className={`form__span ${err}`}>{errMassage}</span>
    </>

  );
}

export default InputPassword;
