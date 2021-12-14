import React from "react";
import './Account.css';
import {useHistory} from "react-router-dom";

function Account() {
  const history = useHistory();

  function handleClickAccount() {
    history.push('./profile')
  }

  return(
    <div className={`account`}>
      <button
        className="account__btn button__reset"
        onClick={handleClickAccount}>
        аккаунт
        <i className="account__btn-icon" />
      </button>
    </div>
  );
}

export default Account;
