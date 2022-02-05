import React from "react";
import "./Input.css";

// ф-ый компонент
function InputEmail ({ label, placeholder, id, name, value, onChange, errMassage, err,}) {

  return(
    <>
      <label className={`form__label`}>{label}</label>
      <input
        className={`form__input form__input-err`}
        placeholder={placeholder}
        type="email"

        id={id}
        name={name}
        value={value}
        onChange={onChange}

        pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
        autoComplete="off"
        required
      />
      <span className={`form__span ${err}`}>{errMassage}</span>
    </>

  );
}

export default InputEmail;
