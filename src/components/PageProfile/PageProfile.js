import './PageProfile.css';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import NavAuth from '../NavAuth/NavAuth';
import { Link } from 'react-router-dom';

const PageProfile = () => {
  const user = {name: "Виталий", email: "pochta@yandex.ru"}

  return (
    <>
      <Header type='app'>
        <Logo/>
        <NavAuth/>
      </Header>
      <div className="profile">
        <div className="profile__container">
          <main className="profile__main">
            <h1 className="profile__title">Привет, { user.name }!</h1>
            <div className="profile__data">
              <div className="profile__user-name">
                <h2 className="profile__label">Имя</h2>
                <h3 className="profile__name">{ user.name }</h3>
              </div>
              <div className="profile__user-email">
                <h2 className="profile__label">E-mail</h2>
                <h3 className="profile__email">{ user.email }</h3>
              </div>
            </div>
          </main>
          <footer className="profile__footer">
            <button className="profile__btn">Редактировать</button>
            <Link to="/sign-out" className="profile__link">Выйти из аккаунта</Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PageProfile;
