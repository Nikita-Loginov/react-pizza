import React from "react";

import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="notFound">
      <div className="container">
        <div className="notFound__inner">
          <h1 className="notFound__title">Не удалось найти страницу 😌</h1>

          <div className="notFound__textbox">
            <p>Похоже, такой страницы у нас еще не существует</p>
          </div>

          <Link to="/" className="notFound__link">Вернуться на главную</Link>
        </div>
      </div>
    </section>
  );
}
