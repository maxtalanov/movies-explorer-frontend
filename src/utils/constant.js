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

export const checkResponse = res => res.ok  ? res.json() : Promise.reject(res);

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

// Длина короткометражного фильма
export const HORT_FILM_DURATION = 40 

// localStorage Movies (Ключ, входное значение)
export const KEY_STORAGE_MOVIES = 'searchFilterMovie';
export const INIT_VALAE_STORAGE_MOVIES = {
  switcher: false,
  input: '',
  type: 'movie',
};

// STATE INNIT MyMovies
export const INIT_STATE_MY_MOVIES = {
  switcher: false,
  input: '',
  type: 'myMovie',
};

export const NOTIFICATION_CONFIG = {
  INIT_STATE: [],
  TYPE: {
    ERR: 'error',
    SUCCESS: 'success',
    WARNING: 'warning',
  },
  ID_RANDOM: Math.random().toString(36).substring(2),
}

// Конфиг отфетственный за отрисовку карточек по размеру экрана
export const WIDTH_DISPLAY_CARD = {
    DESCTOP: {
      WIDTH: 769,
      VALUE_ADD: 3,
      VALUE_LENGHT: 5,
    },
    TABLET:  {
      WIDTH: 481,
      VALUE_ADD: 2,
      VALUE_LENGHT: 8,
    },
    MOBILE: {
      WIDTH: 320,
      VALUE_ADD: 2,
      VALUE_LENGHT: 12,
    },
}