import React from "react";
import "./Checkbox.css";

function Checkbox({ label }) {

  return(
      <div className="checkbox">
        <label className="checkbox__label">
          <input className="checkbox__input"  type="checkbox"  />
          <span className="checkbox__span" />
        </label>
        <span className="checkbox__text">{label}</span>
      </div>
  )
}

export default Checkbox;
