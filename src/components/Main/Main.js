import React from "react";
import './Main.css';

import Header from "../Header/Header";
import NavButton from "../NavButton/NavButton";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";


function Main() {
  return (
    <section className="main">
      <Header theme="dark-blue">
        <NavButton />
      </Header>

      <section className="main">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </section>

      <Footer />
    </section>
  );
}

export default Main;
