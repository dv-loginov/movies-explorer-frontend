import './NavTab.css';

const NavTab = () => {
  return (
    <div className='nav-tab'>
      <a
        className='nav-tab__link'
        href='/sign-in'>
        Регистрация
      </a>
      <a
        className='nav-tab__link'
        href='/login'>
        Войти
      </a>
    </div>
  );
};

export default NavTab;
