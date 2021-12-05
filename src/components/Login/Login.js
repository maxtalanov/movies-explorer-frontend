// Компонент "Авторезации пользователя"

import React from "react"; //Инициализация библиотеки
import './Login.css'; // Ф-ил стилей

import Input from "../Input/Input";
import WithForm from "../WithForm/WithForm"; //Инициализация стилей

function Login() {

  return (
    <section className="login">
      <WithForm
        titleForm="Рады видеть!"
        titleBtnSubmit="Войти"
        subTitle="Ещё не зарегистрированы?"
        btnLink="Регистрация"
        modMargin="form__btn-submit_type_login"
        link="/signup"
      >
        <fieldset className={`form__fieldset`}>
          <Input label="E-mail" type="email"/>
          <Input label="Пароль" type="password"/>
        </fieldset>
      </WithForm>
    </section>
  );
}

export default Login;
