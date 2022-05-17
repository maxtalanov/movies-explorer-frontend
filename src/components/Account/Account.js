import React from "react";
import './Account.css';
import {useHistory} from "react-router-dom";

function Account({theme}) {
  const history = useHistory();

  function handleClickAccount() {
    history.push('./profile')
  }

  return(
    <div className={`account`}>
      <button
        className={`account__btn account__btn_theme_${theme} button__reset hover-opacity`}
        onClick={handleClickAccount}>
        аккаунт
        <i className={`account__btn-icon account__btn-icon_theme_${theme}`}/>
      </button>
    </div>
  );
}

export default Account;
