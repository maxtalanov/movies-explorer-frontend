export const technologies = [
  {
    id: '01',
    text: 'HTML',
  },
  {
    id: '02',
    text: 'CSS',
  },
  {
    id: '03',
    text: 'JS',
  },
  {
    id: '04',
    text: 'React',
  },
  {
    id: '05',
    text: 'Git',
  },
  {
    id: '06',
    text: 'Express.js',
  },
  {
    id: '07',
    text: 'mongoDB',
  },
];

export const navTabLinksConfig = [
  {
    id: 1,
    link: '#о_проекте',
    text: 'О проекте',
  },
  {
    id: 2,
    link: '#технологии',
    text: 'Технологии',
  },
  {
    id: 3,
    link: '#студент',
    text: 'Студент',
  },
]

export const porfolioConfig = [
  {
    id: 1,
    title: 'Статичный сайт',
    link: 'https://maxtalanov.github.io/YandexMMT/',
  },
  {
    id: 2,
    title: 'Адаптивный сайт',
    link: 'https://maxtalanov.github.io/russian-travel/',
  },
  {
    id: 3,
    title: 'Одностраничное приложение',
    link: 'http://mesto-new.nomoredomains.club',
  },
]

export const socialLinks = {
  instagram: 'https://www.instagram.com/maxtalanov/',
  github: 'https://github.com/maxtalanov',
  fb: 'https://www.facebook.com/talanov.max',
  yp: 'https://practicum.yandex.ru/'
}

export const checkResponse = res => res.ok  ? res.json() : Promise.reject(`Ошибка: ${res.status} - ${res.statusText}.`);

// export const BASE_URL_MAIN = 'http://localhost:3000';
export const BASE_URL_MAIN = 'https://api.maxtalanov.ru';


export const BASE_HEADERS_MAIN = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Credentials': true,
}

export const BASE_URL_MOVIES = 'https://api.nomoreparties.co';

export const USER_MANIFEST = {
  NAME: 'Максим', 
  BIRTH_DATE: {
    DAY: 23,
    MONTH: 10,
    YEAR: 1995,
  },
  SPECIALTY: 'Фронтенд-разработчик',
  BIO: 'Я родился и живу в Москве, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.'
}
