import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from  "../../contexts/CurrentUserContext";
import { 
  Header, 
  NavMenuHeader
} from "components";

import './Profile.css';

function Profile({ onLogout, onUpdateUser}) {
  const currentUser = useContext(CurrentUserContext);
  const [formChanged, setFormChanged] = useState(false);
  const [originalUserData, setOriginalUserData] = useState({});
  const [userData, setUserData] = useState({
    email: '',
    userName: '',
  })


  useEffect(() => {
    if (currentUser) {
      setUserData({
        userName: currentUser.name,
        email: currentUser.email,
      });
      setOriginalUserData({
        userName: currentUser.name,
        email: currentUser.email,
      });
    }
  },[currentUser]);

  useEffect(() => {
    const { userName: newUserName, email: newEmail } = userData;
    const { userName: originalUserName, email: originalEmail } = originalUserData || {};
  
    const isFormChanged = newUserName !== originalUserName || newEmail !== originalEmail;
  
    setFormChanged(isFormChanged);
  }, [userData, originalUserData]);

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

          <button 
            type="submit" 
            className="profile__form-btn-submit button__reset hover-opacity"
            disabled={!formChanged}
          >
            Редактировать
          </button>
          <button type="button" className="profile__form-btn-exit button__reset hover-opacity" onClick={onLogout}>
            Выйти из аккаунта
          </button>
        </form>

      </section>
    </>
  );
}

export default Profile;
