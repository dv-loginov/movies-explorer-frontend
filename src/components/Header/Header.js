import './Header.css'
import Logo from '../Logo/Logo';
import NavTab from '../NavTab/NavTab';

const Header = () => {
  return (
    <header className='header header_landing'>
      <div className="header__container">
        <Logo />
        <NavTab />
      </div>

    </header>
  );
};

export default Header;
