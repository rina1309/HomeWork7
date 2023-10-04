// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header-content'>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/form">Регистрация</Link>
          </li>
          <li>
            <Link to="/twoBlocks">Блоки </Link>
          </li>
          <li>
            <Link to="/todolist">Список задач</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
