//Компоннт "Регистрации пользователя"
import React from "react";
import './Register.css';

import WithForm from "../WithForm/WithForm";
import Input from "../Input/Input";


// ф-ый компонент
function Register() {

  return (
    <section className="register">
      <WithForm
        titleForm="Добро пожаловать!"
        titleBtnSubmit="Зарегистрироваться"
        subTitle="Уже зарегистрированы?"
        btnLink="Войти"
        modMargin="form__btn-submit_type_register"
        link="/signin"
      >
        <fieldset className={`form__fieldset`}>
          <Input label="Имя" type="text" placeholder="Ваше имя" required={true}/>
          <Input label="E-mail" type="email" placeholder="Ваш e-mail" required={true} />
          <Input
            label="Пароль"
            type="password"
            placeholder="Ваш пароль"
            required={true}
            errMassage='Пароль должен бытьь...'
            err='form__span-err'/>
        </fieldset>
      </WithForm>
    </section>
  )
}

export default Register;
