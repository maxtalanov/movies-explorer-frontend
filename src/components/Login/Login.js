import React from "react";
import {
  WithForm,
  InputEmail,
  InputPassword,
} from "components";

import { useFormWithValidation } from "hooks";

import './Login.css';

function Login({ onLogin }) {
  const loginData = useFormWithValidation({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin(loginData.values);
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
        isValid={loginData.isValid}
      >
        <fieldset className={`form__fieldset`}>
          <InputEmail
            label="E-mail"
            placeholder="Укажите Ваш email"
            id="login-email"
            name="email"
            value={loginData.values.email}
            onChange={loginData.handleChange}
            errMassage={loginData.errors.email}
          />

          <InputPassword
            label="Пароль"
            placeholder="Укажите Ваш пароль"
            id="login-password"
            name="password"
            value={loginData.values.password}
            onChange={loginData.handleChange}
            errMassage={loginData.errors.password}
          />
        </fieldset>
      </WithForm>
    </section>
  );
}

export default Login;
