import './NavAuth.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavAuth = () => {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleClickToggle = () => {
    console.log('toggle menu');
    setIsMenuOpened(!isMenuOpened);
  }
  //
  // const handleClickClose = () => {
  //   console.log('open menu');
  // }

  return (
    <nav className='nav-auth'>
      <div className={ `nav-auth__cover ${ isMenuOpened ? "nav-auth__cover_opened " : "" }` }></div>
      <div className={ `nav-auth__menu ${ isMenuOpened ? "nav-auth__menu_opened" : "" }` }>
        <div className="nav-auth__film">
          <Link className='nav-auth__link nav-auth__link_main' to='/'>Главная</Link>
          <Link className='nav-auth__link nav-auth__link_active' to='/movies'>Фильмы</Link>
          <Link className='nav-auth__link' to='/saved-movies'>Сохраненные фильмы</Link>
        </div>
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
