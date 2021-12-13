import React from "react";
import './BurgerMenu.css'
import { Link } from "react-router-dom";
import Account from "../Account/Account";

function BurgerMenu({items}) {
  const renderItemsList = items.map((item) => {
    return (
      <li className="menu__li">
        <Link className="link" to={item.link}>{item.text}</Link>
      </li>
    )
  })
  function onClose() {

  }

  return (
    <section className="BurgerMenu">
      <menu className="menu">
        <button className="menu__btn-close button__reset" onClick={onClose} />
        <ul className="menu__ul">
          {renderItemsList}
        </ul>
        <Account
          modStylePosition={"account__position_center"}
        />
      </menu>
    </section>
  );
}


export default BurgerMenu;
