import './PageRegister.css';
import HeaderPageAuth from '../HeaderPageAuth/HeaderPageAuth';
import FooterPageAuth from '../FooterPageAuth/FooterPageAuth';
import ContentAuthPage from '../ContentAuthPage/ContentAuthPage';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import InputError from '../InputError/InputError';
import ButtonAuthSubmit from '../ButtonAuthSubmit/ButtonAuthSubmit';
import { useEffect, useState } from 'react';
import MainApi from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

const PageRegister = ({handleRegister}) => {
  const {values, handleChange, resetForm, errors, isValid} = useFormWithValidation();

  const [errorRegister, setErrorRegister] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    MainApi.register(
      {
        name: values.name || values.name,
        email: values.email || values.email,
        password: values.password || values.password,
      }
    )
      .then(() => {
        handleRegister({
          email: values.email || values.email,
          password: values.password || values.password
        });
      })
      .catch((err) => {
        setErrorRegister(`Ошибка регистрации: ${ err }`)
        console.error(err);
      })
  }

  useEffect(() => {
    resetForm('', {}, false);
  }, [resetForm]);

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
              name='name'
              onChange={ handleChange }
              placeholder='Имя пользователя'
              min='2'
              max='30'
              required={ null }
              value={ values.name || '' }
            />
            <InputError text={ errors.name }/>
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
              placeholder='Пароль пользователя'
              min='8'
              required={ 'required' }
              value={ values.password || '' }
            />
            <InputError text={ errors.pattern }/>
            <div className="register__btn">
              <InputError text={ errorRegister }/>
              <ButtonAuthSubmit
                text="Зарегистрироваться"
                isValid={ isValid }/>
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
