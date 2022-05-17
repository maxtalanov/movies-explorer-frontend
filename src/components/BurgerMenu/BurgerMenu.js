import React from "react";
import { Link } from "react-router-dom";
import Account from "../Account/Account";
import './BurgerMenu.css'

function BurgerMenu({items, active, setActive}) {

  const renderItemsList = items.map((item) => {
    return (
      <li className="menu__li" key={item.link}>
        <Link className="link" to={item.link}> {item.text} </Link>
      </li>
    )
  })

  return (
    <section className={active ? "BurgerMenu active" : "BurgerMenu"}>
      <menu className="menu">
        <button className="menu__btn-close button__reset hover-opacity" onClick={()=> setActive(!active)} />
        <ul className="menu__ul">
          {renderItemsList}
        </ul>
        <div className="menu__account-container">
          <Account theme={`dark`}/>
        </div>
      </menu>
    </section>
  );
}


export default BurgerMenu;
