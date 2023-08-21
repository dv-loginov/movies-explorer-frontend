import './PageRegister.css';
import HeaderPageAuth from '../HeaderPageAuth/HeaderPageAuth';
import FooterPageAuth from '../FooterPageAuth/FooterPageAuth';
import ContentAuthPage from '../ContentAuthPage/ContentAuthPage';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import ButtonAuthSubmit from '../ButtonAuthSubmit/ButtonAuthSubmit';
import { useState } from 'react';
import MainApi from '../../utils/MainApi';

const PageRegister = ({handleRegister}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    MainApi.register({name, email, password,})
      .then(() => {
        handleRegister({email, password});
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <ContentAuthPage>
      <HeaderPageAuth/>
      <main>
        <section className="register">
          <AuthForm
            name='register'
            onSubmit={ handleOnSubmit }>
            <Input
              type='text'
              label='Имя'
              id='userName'
              name='userName'
              onChange={ handleChangeName }
              placeholder='Имя пользователя'
              min='2'
              max='30'
              required={ null }
              value={ name || '' }
            />
            <InputError text=' '/>
            <Input
              type='email'
              label='E-mail'
              id='email'
              name='email'
              onChange={ handleChangeEmail }
              placeholder='Почта пользователя'
              required={ 'required' }
              value={ email || '' }
            />
            <InputError text=' '/>
            <Input
              type='password'
              label='Пароль'
              id='password'
              name='password'
              onChange={ handleChangePassword }
              placeholder='Пароль пользователя'
              min='8'
              required={ 'required' }
              value={ password }
            />
            <InputError text=' '/>
            <div className="register__btn">
              <InputError text=' '/>
              <ButtonAuthSubmit text="Зарегистрироваться"/>
            </div>
          </AuthForm>
        </section>
      </main>
      <FooterPageAuth
        question='Уже зарегистрированы?'
        link='/signin'
        linkText='Войти'
      />
    </ContentAuthPage>
  );
};

export default PageRegister;
