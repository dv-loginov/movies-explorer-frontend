import './PageProfile.css';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import NavAuth from '../NavAuth/NavAuth';
import { useContext, useEffect } from 'react';
import MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/useFormWithValidation';
import InputError from '../InputError/InputError';
import { useNavigate } from 'react-router-dom';

const PageProfile = ({handleExit}) => {
  const navigate = useNavigate();

  const {values, handleChange, resetForm, errors, isValid} = useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);

  const isNameNotChange = (currentUser.name === (values.userName || values.name));
  const isEmailNotChange = (currentUser.email === (values.userEmail || values.email));
  const isDisable = (isValid && (!isNameNotChange || !isEmailNotChange));

  useEffect(() => {
    resetForm(currentUser, {}, true);
  }, [currentUser, resetForm]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    mainApi.setUser({
      name: values.userName || values.name,
      email: values.userEmail || values.email
    })
      .then((user) => {
        alert('Профиль обнавлен')
        currentUser.name = user.name;
        currentUser.email = user.email;
        navigate('/profile');
      })
      .catch((err) => console.error(err));
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
              <h1 className="profile__title">Привет, { currentUser.name }!</h1>

              <form onSubmit={ handleOnSubmit }
                    action='#'
                    className="profile__form"
                    name="profileForm"
                    id="profile-form">
                <InputError text={ errors.userName }/>
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
                    onChange={ handleChange }
                    value={ values.userName || currentUser.name }
                  />
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
                    onChange={ handleChange }
                    required
                    value={ values.userEmail || currentUser.email }/>
                </div>
                <InputError text={ errors.userEmail }/>
              </form>
            </section>
          </main>
          <footer className="profile__footer">
            <button
              type="submit"
              form="profile-form"
              disabled={ !isDisable }
              className={ `profile__btn profile__btn_edit ${ isDisable ? '' : 'profile__btn_disable' }` }>Редактировать
            </button>
            <button
              onClick={ onClickExit }
              type="button"
              className="profile__btn profile__btn_exit">Выйти из аккаунта
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PageProfile;
