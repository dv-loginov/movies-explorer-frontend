import './NavAuth.css';
import { Link } from 'react-router-dom';

const NavAuth = () => {
  return (
    <nav className='nav-auth'>
      <div className="nav-auth__menu">
        <div className="nav-auth__main">
          <Link className='nav-auth__link' to='/'>Главная</Link>
        </div>
        <div className="nav-auth__film">
          <Link className='nav-auth__link nav-auth__link_active' to='/movies'>Фильмы</Link>
          <Link className='nav-auth__link' to='/saved-movies'>Сохраненные фильмы</Link>
        </div>
        <div className="nav-auth__account">
          <Link className='nav-auth__link nav-auth__link_with-icon' to='/profile'>Аккаунт
            <div className="nav-auth__account-ico"></div>
          </Link>
        </div>
      </div>
      <button className="nav-auth__burger-ico"></button>
      <button className="nav-auth__close-ico"></button>
    </nav>
  );
};

export default NavAuth;
