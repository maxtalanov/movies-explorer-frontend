import React from 'react';
import preloader from '../../images/preloader.svg';

import './Preloader.css';

const Preloader = ({ massage }) => {

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
