import './PageLogin.css';
import HeaderPageAuth from '../HeaderPageAuth/HeaderPageAuth';
import FooterPageAuth from '../FooterPageAuth/FooterPageAuth';
import ContentAuthPage from '../ContentAuthPage/ContentAuthPage';
import AuthForm from '../AuthForm/AuthForm';
import ButtonAuthSubmit from '../ButtonAuthSubmit/ButtonAuthSubmit';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import { useState } from 'react';

const PageLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <ContentAuthPage>
      <HeaderPageAuth/>
      <main>
        <section className="login">
          <AuthForm
            name='register'
            onSubmit={ handleOnSubmit }>
            <Input
              type='email'
              label='E-mail'
              id='email'
              name='email'
              onChange={ handleChangeEmail }
              placeholder='Почта пользователя'
              required={ 'required' }
              value={ email || "pochta@yandex.ru " }
            />
            <InputError text=' '/>
            <Input
              type='password'
              label='Пароль'
              id='password'
              name='password'
              onChange={ handleChangePassword }
              placeholder='Пороль пользователя'
              min='8'
              max='40'
              required={ 'required' }
              value={ password }
            />
            <InputError text=' '/>
            <div className="login__btn">
              <ButtonAuthSubmit text="Войти"/>
            </div>
          </AuthForm>
        </section>
      </main>
      <FooterPageAuth
        question='Еще не зарегистрированы?'
        link='/signup'
        linkText='Регистрация'/>
    </ContentAuthPage>
  );
};

export default PageLogin;
