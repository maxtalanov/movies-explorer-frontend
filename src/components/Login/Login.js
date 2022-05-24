import React from "react";
import WithForm from "../WithForm/WithForm";
import InputEmail from "../Input/InputEmail";
import InputPassword from "../Input/InputPassword";
import { useFormWithValidation } from "../../utils/globalMethod/useForm";
import './Login.css';

function Login({ onLogin }) {
  const loginData = useFormWithValidation({
    email: '',
    password: '',
  });
  console.log(loginData)

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin(loginData.values);
    loginData.resetForm();
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
        isVelid={loginData.isValid}
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
