import React from "react";
import "./AboutMe.css";

import Heading from "../Heading/Heading";
import avatar from '../../images/img.jpg';


function AboutMe() {

   return(
     <section id={'студент'}  className={`about-me`}>
       <Heading id="#Student" title="Студент" paddingSize="m"/>
       <div className="about-me__container">
         <div className="about-me__item item__left">
           <h2 className={`about-me__title`}>Максим</h2>
           <h3 className="about-me__sub-title">Фронтенд-разработчик, 26 лет</h3>
           {/*Дополнить ф-ию для авто расчета возроста в реальном времени на 12 стр.*/}
           <p className="about-me__bio">
             Я родился и живу в Москве, закончил факультет экономики СГУ.
             У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
             Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
             После того, как прошёл курс по веб-разработке,
             начал заниматься фриланс-заказами и ушёл с постоянной работы.
           </p>
           {/*Написать своё БИО на 15 стр.*/}
           <ul className="about-me__contact">
             <li className="about-me__list">
               <a href="https://www.instagram.com/maxtalanov/" target="_blank" className="about__link" rel="noreferrer">Instagram</a>
             </li>
             <li className="about-me__list">
               <a href="https://github.com/maxtalanov" target="_blank"  className="about__link" rel="noreferrer">Github</a>
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
