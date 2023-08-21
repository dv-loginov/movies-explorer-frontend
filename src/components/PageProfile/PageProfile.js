import './PageProfile.css';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import NavAuth from '../NavAuth/NavAuth';
import { useContext, useEffect, useState } from 'react';
import MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const PageProfile = ({handleExit}) => {

  const currentUser = useContext(CurrentUserContext);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
  }

  const onClickExit = () => {
    MainApi.exit()
      .then((data) => {
        console.log(data.message);
        handleExit();
      })
      .catch((err) => {
        console.error(err);
      });
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
            <button
              type="submit"
              form="profile-form"
              className="profile__btn profile__btn_edit">Редактировать</button>
            <button
              onClick={ onClickExit }
              type="button"
              className="profile__btn profile__btn_exit">Выйти из аккаунта</button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PageProfile;
