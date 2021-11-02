//корневой компонент приложения, его создаёт CRA.

import React from "react"; //Инициализация библиотеки (не обязательное действие)
import { BrowserRouter, Route, Link } from "react-router-dom"; //Библиотека Router DOM

import './App.css'; //Инициализация стилей

// ф-ый компонент
function App() {
  return (
    <div className="App"/>
  );
}

export default App;
