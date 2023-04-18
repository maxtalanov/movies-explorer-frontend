import React from 'react';
import preloader from '../../images/preloader.svg';

import './Preloader.css';

const Preloader = ({ massage }) => {

    return (
        <div className="preloader">
          <img className="preloader__icon" src={preloader} alt="индикатор загрузки"/>
          {massage ? <p className="preloader__massage">Что-то происходит</p> : null}
        </div>
    )
};

export default Preloader
