import React from "react";
import './BurgerMenu.css'
import { Link } from "react-router-dom";
import Account from "../Account/Account";

function BurgerMenu({items, active, setActive}) {

  const renderItemsList = items.map((item) => {
    return (
      <li className="menu__li">
        <Link className="link" to={item.link}>{item.text}</Link>
      </li>
    )
  })

  return (
    <section className={active ? "BurgerMenu active" : "BurgerMenu"}>
      <menu className="menu">
        <button className="menu__btn-close button__reset" onClick={()=> setActive(!active)} />
        <ul className="menu__ul">
          {renderItemsList}
        </ul>
        <div className="menu__account-container">
          <Account/>
        </div>
      </menu>
    </section>
  );
}


export default BurgerMenu;
