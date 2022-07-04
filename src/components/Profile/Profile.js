import React from "react";
import { CurrentUserContext } from  "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import NavMenuHeader from "../NavMenuHeader/NavMenuHeader";
import './Profile.css';
import {useFormWithValidation} from "../../utils/globalMethod/useForm";

function Profile({ onLogout, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  // const userData = useFormWithValidation({
  //   email: '',
  //   userName: '',
  // })
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
        <form className="profile__form" onSubmit={handleSubmit}>
          <h2 className="profile__form-title">Привет, {currentUser.name}!</h2>
          <fieldset className="profile__form-set">
            <div className="profile__form-container container-top">
              <label className="profile__form-label" htmlFor="userName">Имя</label>
              <input
                className="profile__form-input"
                placeholder="Ваше имя"
                type="text"
                id="userName"
                name="userName"
                value={userData.userName}
                onChange={handleChange}
                pattern="[А-Яа-яЁё]{2,30}"
                minLength={2}
                maxLength={30}
                autoComplete="off"
                required
              />
            </div>

            <div className="profile__form-container container-bottom">
              <label className="profile__form-label" htmlFor="email">E-mail</label>
              <input
                className="profile__form-input"
                placeholder="Ваш e-mail"
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                autoComplete="off"
                required
              />

            </div>
          </fieldset>

          <button type="submit" className="profile__form-btn-submit button__reset hover-opacity">Редактировать</button>
          <button type="button" className="profile__form-btn-exit button__reset hover-opacity" onClick={onLogout}>Выйти из аккаунта</button>
        </form>

      </section>
    </>
  );
}

export default Profile;
