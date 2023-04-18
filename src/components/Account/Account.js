import React from "react";
import { useHistory } from "react-router-dom";

import './Account.css';

function Account() {
  const history = useHistory();

  function handleClickAccount() {
    history.push('./profile')
  }

  return(
    <div className={`account`}>
      <button
        className="account__btn button__reset hover-opacity"
        onClick={handleClickAccount}>
        аккаунт
        <i className="account__btn-icon" />
      </button>
    </div>
  );
}

export default Account;
