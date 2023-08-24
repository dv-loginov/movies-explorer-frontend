import './SearchForm.css';
import { useState } from 'react';
import InputError from '../InputError/InputError';

const SearchForm = ({handleSubmit, handleShortFilter, shortFilter}) => {

  const [searchString, setSearchString] = useState('');
  const [error, setError] = useState('');

  const onSubmitForm = (event) => {
    event.preventDefault();
    searchString.length === 0
      ? setError('Нужно ввести ключевое слово')
      : handleSubmit({searchString});
  }

  const changeValueSearch = (event) => {
    setSearchString(event.target.value);
    if (searchString.length > 0) {
      setError('');
    }
  }

  const changeValueCheckBox = (event) => {
    // if (searchString.length === 0) setError('Нужно ввести ключевое слово');
    handleShortFilter({newShortFilter: event.target.checked, searchString});
  }

  return (
    <section className='search'>
      <form className='search-form' onSubmit={ onSubmitForm }>
        <div className="search-form__input-warp">
          <input
            type="text"
            className="search-form__input"
            placeholder='Фильм'
            onChange={ changeValueSearch }/>
          <button type='submit' className="search-form__button">Поиск</button>
        </div>
        <InputError text={ error }/>
      </form>
      <label className="search-form__checkbox-wrap">
        <input
          type="checkbox"
          name="checkbox"
          className="search-form__checkbox"
          onChange={ changeValueCheckBox }
          checked={ shortFilter }
        />
        <span className="search-form__checkbox-mark"></span>
        <span className="search-form__checkbox-label">Короткометражки</span>
      </label>
    </section>

  );
};

export default SearchForm;
