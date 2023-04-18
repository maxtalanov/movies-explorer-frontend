import React from "react";
import "./Input.css";

// ф-ый компонент
function InputEmail ({ label, placeholder, id, name, value, onChange, errMassage}) {
  const errorActive = (errMassage  === '') ? null : 'form__input-err';

  console.log()
  return(
    <>
      <label className={`form__label`}>{label}</label>
      <input
        className={`form__input ${errorActive}`}
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
      {errMassage ? <span className={`form__span form__span-err`}>{errMassage}</span> : null}
    </>

  );
}

export default InputEmail;
