import React from "react";
import "./Input.css";

// ф-ый компонент
function InputName({ label, placeholder, id, name, value, onChange, errMassage}) {
  const errorActive = (errMassage  === '') ? null : 'form__input-err';

  return(
    <>
      <label className={`form__label`}>{label}</label>
      <input
        className={`form__input ${errorActive}`}
        placeholder={placeholder}
        type="text"

        id={id}
        name={name}
        value={value}
        onChange={onChange}

        pattern="[А-Яа-яЁё]{2,30}"
        minLength={2}
        maxLength={30}
        autoComplete="off"
        required
      />
      {errMassage ? <span className={`form__span form__span-err`}>{errMassage}</span> : null}
    </>

  );
}

export default InputName;
