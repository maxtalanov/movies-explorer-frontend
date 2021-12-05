//Компоннт "Редактирования пользователя"
import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import NavMenuHeader from "../NavMenuHeader/NavMenuHeader";

function Profile() {
  const nameUsers = 'Максим';
  const emailUsers = 'test@test.ru';

  return (
    <>
      <Header theme="white">
        <NavMenuHeader />
      </Header>

      <section className="profile">
        <form className="profile__form">
          <h2 className="profile__form-title">Привет, {nameUsers}!</h2>
          <fieldset className="profile__form-set">
            <div className="profile__form-container container-top">
              <label className="profile__form-label" htmlFor="name">Имя</label>
              <input className="profile__form-input" id="name"  type="text" value={nameUsers} />
            </div>
            <div className="profile__form-container container-bottom">
              <label className="profile__form-label" htmlFor="mail">E-mail</label>
              <input className="profile__form-input" id="mail"  type="text" value={emailUsers} />
            </div>

          </fieldset>

          <button className="profile__form-btn-submit button__reset">Редактировать</button>
          <button className="profile__form-btn-exit button__reset">Выйти из аккаунта</button>
        </form>


      </section>
    </>
  );
}

export default Profile;
