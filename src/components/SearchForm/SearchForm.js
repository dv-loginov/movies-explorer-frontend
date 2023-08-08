import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className='search-form'>
      <div className="search-form__input-warp">
        <input type="text" className="search-form__input" placeholder='Фильм'/>
        <button type='submit' className="search-form__button">Поиск</button>
      </div>
      <label className="search-form__checkbox-wrap">
        <input type="checkbox" name="checkbox" className="search-form__checkbox"/>
        <span className="search-form__checkbox-mark"></span>
        <span className="search-form__checkbox-label">Короткометражки</span>
      </label>
    </form>
  );
};

export default SearchForm;

// <label className="checkbox_wrap">
//   <input type="checkbox" name="checkbox" className="checkbox_inp">
//     <span className="checkbox_mark"></span>
// </label>
