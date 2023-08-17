import './PageProfile.css';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import NavAuth from '../NavAuth/NavAuth';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PageProfile = () => {

  const [email, setEmail] = useState('pochta@yandex.ru');
  const [name, setName] = useState('Виталий');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
  }


  return (
    <>
      <Header type='app'>
        <Logo/>
        <NavAuth/>
      </Header>
      <div className="profile">
        <div className="profile__container">
          <main>
            <section className="profile__main">
              <h1 className="profile__title">Привет, { name }!</h1>

              <form onSubmit={ handleOnSubmit }
                    action='#'
                    className="profile__form"
                    name="profileForm"
                    id="profile-form">
                <div className="profile__user-name">
                  <label className="profile__label" htmlFor="user-name">Имя</label>
                  <input
                    type="text"
                    id="user-name"
                    className="profile__input"
                    name="userName"
                    placeholder="Имя пользователя"
                    minLength="2"
                    maxLength="30"
                    onChange={ handleChangeName }
                    value={ name }/>
                </div>
                <div className="profile__user-email">
                  <label className="profile__label" htmlFor="user-email">E-mail</label>
                  <input
                    type="email"
                    id="user-email"
                    className="profile__input"
                    name="userEmail"
                    placeholder="Почта пользователя"
                    minLength="2"
                    maxLength="30"
                    onChange={ handleChangeEmail }
                    value={ email }/>
                </div>
              </form>
            </section>
          </main>
          <footer className="profile__footer">
            <button type="submit" form="profile-form" className="profile__btn">Редактировать</button>
            <Link to="/signout" className="profile__link">Выйти из аккаунта</Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PageProfile;
