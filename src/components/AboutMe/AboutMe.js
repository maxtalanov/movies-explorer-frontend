import React from "react";
import { socialLinks, USER_MANIFEST } from "../../utils/constant";
import Heading from "../Heading/Heading";
import avatar from '../../images/img.jpg';
import "./AboutMe.css";

function AboutMe() {
  const DATA_OBJ = {
    day: USER_MANIFEST.BIRTH_DATE.DAY, 
    month: USER_MANIFEST.BIRTH_DATE.MONTH, 
    year: USER_MANIFEST.BIRTH_DATE.YEAR,
  }

  const calculytorAge = (birthDate) => { 
    return Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
  }

  const dateFormat = ({day, month, year}) => {
    return `${year}-${month}-${day}`
  };

   return(
     <section id={'студент'}  className={`about-me`}>
       <Heading id="#Student" title="Студент" paddingSize="m"/>
       <div className="about-me__container">
         <div className="about-me__item item__left">
           <h2 className={`about-me__title`}>Максим</h2>
           <h3 className="about-me__sub-title">
            {USER_MANIFEST.SPECIALTY}, {calculytorAge(dateFormat(DATA_OBJ))} лет
           </h3>
           <p className="about-me__bio">
             {USER_MANIFEST.BIO}
           </p>
           
           <ul className="about-me__contact">
             <li className="about-me__list hover-opacity">
               <a href={socialLinks.instagram} target="_blank" className="about__link" rel="noreferrer">Instagram</a>
             </li>
             <li className="about-me__list hover-opacity">
               <a href={socialLinks.github} target="_blank"  className="about__link" rel="noreferrer">GitHub</a>
             </li>
             <li className="about-me__list hover-opacity">
               <a href={socialLinks.fb} target="_blank"  className="about__link" rel="noreferrer">FaceBook</a>
             </li>
           </ul>
         </div>
         <div className="about-me__item item__right">
           <img  src={avatar} alt="Фото разработчика" className="about-me__avatar" />
         </div>

       </div>
     </section>
   );
}

export default AboutMe;
