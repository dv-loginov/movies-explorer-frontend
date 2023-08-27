import './SearchForm.css';
import { useEffect, useState } from 'react';
import InputError from '../InputError/InputError';
import { useLocation } from 'react-router-dom';

const SearchForm = ({handleSubmit, handleShortFilter, shortFilter, oldSearchString}) => {

  let location = useLocation();

  const [searchString, setSearchString] = useState('');
  const [error, setError] = useState('');

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (location.pathname === '/movies') {
      searchString.length !== 0
        ? handleSubmit({searchString})
        : setError('Нужно ввести ключевое слово');
    } else {
      searchString.length === 0 ? handleSubmit({searchString: 'all'}) : handleSubmit({searchString});
    }

  }

  const changeValueSearch = (event) => {
    setSearchString(event.target.value);
    if (searchString.length > 0) {
      setError('');
    }
  }

  const changeValueCheckBox = (event) => {
    handleShortFilter({newShortFilter: event.target.checked, searchString});
  }

  useEffect(() => {
    setSearchString(oldSearchString);
  }, [oldSearchString]);

  return (
    <section className='search'>
      <form className='search-form' onSubmit={ onSubmitForm }>
        <div className="search-form__input-warp">
          <input
            type="text"
            className="search-form__input"
            placeholder='Фильм'
            onChange={ changeValueSearch }
            value={ searchString }
          />
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
