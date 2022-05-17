import React, {useState} from "react";
import './NavMenuHeader.css';
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Account from "../Account/Account";

function NavMenuHeader({theme}) {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    {
      link: '/',
      text: 'Главная',
    },
    {
      link: '/movies',
      text: 'Фильмы',
    },
    {
      link: '/saved-movies',
      text: 'Сохранённые фильмы',
    },
  ];

  return(
    <section className="menu-header">
      <div className="menu-header__container-nav">
        <Link to="/movies" className={`menu-header__item menu-header__item_theme_${theme} action hover-opacity`}>Фильмы</Link>
        <Link to="/saved-movies" className={`menu-header__item menu-header__item_theme_${theme} hover-opacity`}>Сохранённые фильмы</Link>
      </div>

      <div className="menu-header__account-container">
        <Account theme={theme} />
      </div>

      <button
        className={`menu-header__btn-burger menu-header__btn-burger_theme_${theme} button__reset hover-opacity`}
        onClick={() => setMenuActive(!menuActive)} />
      <BurgerMenu active={menuActive} setActive={setMenuActive}  theme={theme} items={items} />
    </section>
    );
}

export default NavMenuHeader;
