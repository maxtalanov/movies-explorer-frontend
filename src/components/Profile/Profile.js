//Компоннт "Редактирования пользователя"
import React from "react";
import { CurrentUserContext } from  "../../contexts/CurrentUserContext";
import { 
  Header, 
  NavMenuHeader
} from "components";

import './Profile.css';

function Profile({ onLogout, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [userData, setUserData] = React.useState({
    email: '',
    userName: '',
  })

  React.useEffect(() => {
    if (currentUser) {
      setUserData({
        userName: currentUser.name,
        email: currentUser.email,
      });
    }
  },[currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser(userData);
  }

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
              <input className="profile__form-input" id="name"  type="text" placeholder="Ваше имя" value="Максим" />
            </div>
            <div className="profile__form-container container-bottom">
              <label className="profile__form-label" htmlFor="mail">E-mail</label>
              <input className="profile__form-input" id="mail"  type="email"  placeholder="Ваш e-mail" value="test@test.ru"/>
            </div>

          </fieldset>

          <button className="profile__form-btn-submit button__reset hover-opacity">Редактировать</button>
          <button className="profile__form-btn-exit button__reset hover-opacity">Выйти из аккаунта</button>
        </form>


      </section>
    </>
  );
}

export default Profile;
