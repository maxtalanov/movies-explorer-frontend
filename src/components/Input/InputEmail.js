import { useState } from "react";
import "./Input.css";

// ф-ый компонент
function InputEmail ({ label, placeholder, id, name, value, onChange, errMassage}) {
  const [isValid, setIsValid] = useState(true);
  const errorActive = (errMassage  === '' && isValid) ? null : 'form__input-err';

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (event) => {
    const emailValue = event.target.value;
    onChange(event);
    setIsValid(validateEmail(emailValue));
  };

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
        onChange={handleChange}
        autoComplete="off"
        required
      />
      {!isValid && <span className={`form__span form__span-err`}>Некорректный email-адрес</span>}
      {errMassage ? <span className={`form__span form__span-err`}>{errMassage}</span> : null}
    </>

  );
}

export default InputEmail;
