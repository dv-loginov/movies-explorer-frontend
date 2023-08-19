import './NavAuth.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavAuth = () => {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleClickToggle = () => {
    console.log('toggle menu');
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <nav className='nav-auth'>
      <div className={ `nav-auth__cover ${ isMenuOpened ? "nav-auth__cover_opened " : "" }` }></div>
      <div className={ `nav-auth__menu ${ isMenuOpened ? "nav-auth__menu_opened" : "" }` }>
        <ul className="nav-auth__film">
          <li>
            <Link className='nav-auth__link nav-auth__link_main' to='/'>Главная</Link>
          </li>
          <li>
            <Link className='nav-auth__link nav-auth__link_active' to='/movies'>Фильмы</Link>
          </li>
          <li>
            <Link className='nav-auth__link' to='/saved-movies'>Сохраненные фильмы</Link>
          </li>
        </ul>
        <div className="nav-auth__account">
          <Link className='nav-auth__link nav-auth__link_with-icon' to='/profile'>Аккаунт
            <div className="nav-auth__account-ico"></div>
          </Link>
        </div>
        <button className="nav-auth__close-ico" onClick={ handleClickToggle }></button>
      </div>
      <button className="nav-auth__burger-ico" onClick={ handleClickToggle }></button>
    </nav>
  );
};

export default NavAuth;
