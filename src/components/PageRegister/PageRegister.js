import './PageRegister.css';
import HeaderPageAuth from '../HeaderPageAuth/HeaderPageAuth';
import FooterPageAuth from '../FooterPageAuth/FooterPageAuth';
import ContentAuthPage from '../ContentAuthPage/ContentAuthPage';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import ButtonAuthSubmit from '../ButtonAuthSubmit/ButtonAuthSubmit';
import { useState } from 'react';

const PageRegister = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = (event) => {
    console.log(event.target.value)
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
              value={ name || 'Виталий' }
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
              value={ email || "pochta@yandex.ru " }
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
            <InputError text='Что-то пошло не так ...'/>
            <div className="register__btn">
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
