import React from "react"; //Инициализация библиотеки (не обязательное действие)
import './NavMenuHeader.css'; //Инициализация стилей
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Account from "../Account/Account";

function NavMenuHeader() {
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
        <Link to="/movies" className="menu-header__item action">Фильмы</Link>
        <Link to="/saved-movies" className="menu-header__item">Сохранённые фильмы</Link>
      </div>
      <Account />
      <button className="menu-header__btn-burger button__reset" />
      <BurgerMenu items={items} />
    </section>
  );
}

export default NavMenuHeader;
