import './PageLogin.css';
import HeaderPageAuth from '../HeaderPageAuth/HeaderPageAuth';
import FooterPageAuth from '../FooterPageAuth/FooterPageAuth';
import ContentAuthPage from '../ContentAuthPage/ContentAuthPage';
import AuthForm from '../AuthForm/AuthForm';
import ButtonAuthSubmit from '../ButtonAuthSubmit/ButtonAuthSubmit';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import { useEffect, useState } from 'react';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

const PageLogin = ({handleLogin}) => {
  const {values, handleChange, resetForm, errors, isValid} = useFormWithValidation();

  const [errorLogin, setErrorLogin] = useState('');

  const handleError = (err) => {
    setErrorLogin(`Ошибка авторизации: ${ err }`);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleLogin({
      email: values.email || values.email,
      password: values.password || values.password,
      handleError
    });
  }

  useEffect(() => {
    resetForm('', {}, false);
  }, [resetForm]);

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
              onChange={ handleChange }
              placeholder='Почта пользователя'
              required={ 'required' }
              value={ values.email || '' }
            />
            <InputError text={ errors.email }/>
            <Input
              type='password'
              label='Пароль'
              id='password'
              name='password'
              onChange={ handleChange }
              placeholder='Пороль пользователя'
              min='8'
              max='40'
              required={ 'required' }
              value={ values.password || '' }
            />
            <InputError text={ errors.password }/>
            <div className="login__btn">
              <InputError text={ errorLogin }/>
              <ButtonAuthSubmit
                text="Войти"
                isValid={ isValid }
              />
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
