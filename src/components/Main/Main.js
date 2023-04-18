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

function Main({isLoggedIn}) {

  return (
    <section className="main">
      <Header theme="dark-blue">
        {isLoggedIn? <NavMenuHeader theme={'light'}/> : <NavButton />}
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
