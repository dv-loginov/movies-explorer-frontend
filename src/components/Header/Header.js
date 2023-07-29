import './Header.css'
import Logo from '../Logo/Logo';
import NavTab from '../NavTab/NavTab';

const Header = () => {
  return (
    <div className='header header_landing'>
      <div className="header__container">
        <Logo />
        <NavTab />
      </div>

    </div>
  );
};

export default Header;
