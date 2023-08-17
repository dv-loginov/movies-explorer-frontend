import './NavNoAuth.css';
import { Link } from 'react-router-dom';

const NavNoAuth = () => {
  return (
    <nav className='nav-no-auth'>
      <Link
        className='nav-no-auth__link'
        to='/sign-up'>
        Регистрация
      </Link>
      <Link
        className='nav-no-auth__link nav-no-auth__link_active'
        to='/sign-in'>
        Войти
      </Link>
    </nav>
  );
};

export default NavNoAuth;
