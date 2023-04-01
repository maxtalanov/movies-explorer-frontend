import React from "react";
import "./NavTab.css";

import { navTabLinksConfig} from "../../utils/constant";

function NavTab() {
  const renderLink = navTabLinksConfig.map((m) => {
     return (<a href={m.link} className="NavTab__link hover-opacity">{m.text}</a>)
    })

  return(
    <nav className="NavTab">
      {renderLink}
    </nav>
  )
}

export default NavTab;
