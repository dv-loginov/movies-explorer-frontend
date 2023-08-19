import './HeaderPageAuth.css';
import { useLocation } from "react-router-dom";
import Logo from '../Logo/Logo';

const HeaderPageAuth = () => {
  const location = useLocation();
  const title = location.pathname === '/signup'
    ? 'Добро пожаловать!'
    : 'Рады видеть!'
  return (
    <header className="header-page-auth">
        <Logo/>
        <h1 className="header-page-auth__title">{ title }</h1>
    </header>
  );
};

export default HeaderPageAuth;
