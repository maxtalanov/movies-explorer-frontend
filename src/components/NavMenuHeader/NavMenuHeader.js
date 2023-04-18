import React, {useState} from "react";
import { 
  BurgerMenu,
  Account,
} from "components";
import { Link } from "react-router-dom";

import './NavMenuHeader.css';

function NavMenuHeader() {
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
        <Link to="/movies" className="menu-header__item action hover-opacity">Фильмы</Link>
        <Link to="/saved-movies" className="menu-header__item hover-opacity">Сохранённые фильмы</Link>
      </div>

      <div className="menu-header__account-container">
        <Account />
      </div>

      <button className="menu-header__btn-burger button__reset hover-opacity" onClick={() => setMenuActive(!menuActive)} />
      <BurgerMenu active={menuActive} setActive={setMenuActive}  items={items} />
    </section>
    );
}

export default NavMenuHeader;
