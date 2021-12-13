import React from "react";
import './Account.css';


function Account({modStylePosition}) {

  function handleClickAccount() {
    console.log('click btn account');
  }

  return(
    <div className={`account ${modStylePosition}`}>
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
