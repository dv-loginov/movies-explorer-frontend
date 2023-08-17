import './NavNoAuth.css';
import { Link } from 'react-router-dom';

const NavNoAuth = () => {
  return (
    <nav className='nav-no-auth'>
      <Link
        className='nav-no-auth__link'
        to='/signup'>
        Регистрация
      </Link>
      <Link
        className='nav-no-auth__link nav-no-auth__link_active'
        to='/signin'>
        Войти
      </Link>
    </nav>
  );
};

export default NavNoAuth;
