import React from "react";
import WithForm from "../WithForm/WithForm";
import InputName from "../Input/InputName";
import InputPassword from "../Input/InputPassword";
import InputEmail from "../Input/InputEmail";
import './Register.css';

function Register({ onRegister}) {

  const [registerData, setRegisterData] = React.useState({
    email: '',
    password: '',
    userName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Логин', registerData)
    onRegister(registerData);
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
      >
        <fieldset className={`form__fieldset`}>
            <InputName
              label='Имя'
              placeholder="Укажите Ваше имя"

              id='register-name'
              name='userName'
              value={registerData.userName}

              onChange={handleChange}
            />

          <InputEmail
            label="E-mail"
            placeholder="Укажите Ваш email"

            id='register-email'
            name='email'
            value={registerData.email}

            onChange={handleChange}
          />

          <InputPassword
            label="Пароль"
            placeholder="Придумайте пароль"

            id='register-password'
            name='password'
            value={registerData.password}

            onChange={handleChange}
          />

          {/*<Input label="E-mail" type="email" placeholder="Ваш e-mail" required={true} />*/}
          {/*<Input*/}
          {/*  label="Пароль"*/}
          {/*  type="password"*/}
          {/*  placeholder="Ваш пароль"*/}
          {/*  required={true}*/}
          {/*  errMassage='Пароль должен бытьь...'*/}
          {/*  err='form__span-err'/>*/}
        </fieldset>
      </WithForm>
    </section>
  )
}

export default Register;
