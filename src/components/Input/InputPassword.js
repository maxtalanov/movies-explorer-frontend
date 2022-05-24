import React from "react";
import "./Input.css";

// ф-ый компонент
function InputPassword ({ label, placeholder, id, name, value, onChange, errMassage}) {
  const errorActive = (errMassage === '') ? null : 'form__input-err';

  return(
    <>
      <label className={`form__label`}>{label}</label>
      <input
        className={`form__input ${errorActive}`}
        placeholder={placeholder}
        type="password"

        id={id}
        name={name}
        value={value}
        onChange={onChange}

        pattern="[A-Za-z0-9]{8,30}"
        minLength={8}
        maxLength={30}
        autoComplete="off"
        required
      />
      {errMassage ? <span className={`form__span form__span-err`}>{errMassage}</span> : null}
    </>

  );
}

export default InputPassword;
