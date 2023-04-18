import React from "react";
import {
  WithForm,
  InputName,
  InputEmail,
  InputPassword,
} from "components";

// TODO: Вынести в отдельный hook
import {useFormWithValidation} from "../../utils/globalMethod/useForm";

import './Register.css';

function Register({onRegister}) {
  const registerData = useFormWithValidation({
    email: '',
    password: '',
    userName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister(registerData.values);
  }

  return (
    <section className="register">
      <WithForm
        titleForm="Добро пожаловать!"
        titleBtnSubmit="Зарегистрироваться"
        subTitle="Уже зарегистрированы?"
        btnLink="Войти"
        modMargin="form__btn-submit_type_register"
        link="/signin"
        handleSubmit={handleSubmit}
        isValid={registerData.isValid}
      >
        <fieldset className={`form__fieldset`}>
          <InputName
            label='Имя'
            placeholder="Укажите Ваше имя"

            id='register-name'
            name='userName'
            value={registerData.userName}
            onChange={registerData.handleChange}
            errMassage={registerData.errors.userName}
          />

          <InputEmail
            label="E-mail"
            placeholder="Укажите Ваш email"

            id='register-email'
            name='email'
            value={registerData.email}
            onChange={registerData.handleChange}
            errMassage={registerData.errors.email}
          />

          <InputPassword
            label="Пароль"
            placeholder="Придумайте пароль"

            id='register-password'
            name='password'
            value={registerData.password}
            onChange={registerData.handleChange}
            errMassage={registerData.errors.password}
          />
        </fieldset>
      </WithForm>
    </section>
  )
}

export default Register;
