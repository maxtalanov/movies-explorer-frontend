import React from "react";
import { 
  Header,
  NavButton,
  Promo,
  NavTab,
  AboutProject,
  Techs,
  AboutMe,
  Portfolio,
  Footer,
  NavMenuHeader,
} from "components"

import './Main.css';


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
