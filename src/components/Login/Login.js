import React from "react";
import './Login.css';

import WithForm from "../WithForm/WithForm";
import InputEmail from "../Input/InputEmail";
import InputPassword from "../Input/InputPassword";

function Login({ onLogin }) {
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin(loginData);
  }

  return (
    <section className="login">
      <WithForm
        titleForm="Рады видеть!"
        titleBtnSubmit="Войти"
        subTitle="Ещё не зарегистрированы?"
        btnLink="Регистрация"
        modMargin="form__btn-submit_type_login"
        link="/signup"
        handleSubmit={handleSubmit}
      >
        <fieldset className={`form__fieldset`}>
          <InputEmail
            label="E-mail"
            placeholder="Укажите Ваш email"

            onChange={handleChange}
          />

          <InputPassword
            label="Пароль"
            placeholder="Укажите Ваш пароль"

            onChange={handleChange}
          />
        </fieldset>
      </WithForm>
    </section>
  );
}

export default Login;
