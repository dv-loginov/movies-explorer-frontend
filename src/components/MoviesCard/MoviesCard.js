import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({card}) => {
  // console.log(card);
  const saved = false;
  let location = useLocation();
  const btnClassMod = location.pathname === '/movies'
    ? saved && 'movies-card__btn_mark-unmark'
    : 'movies-card__btn_mark-delete';

  return (
    <li className='movies-card'>
      <div className="movies-card__header">
        <div className="movies-card__name" title={ card.nameRU }>{ card.nameRU }</div>
        <div className="movies-card__time" title={ card.duration }>{ card.duration }</div>
      </div>
      <img src={ ` https://api.nomoreparties.co${card.image.url}` } alt={ `обложка фильма ${ card.nameRU }` } className="movies-card__cover"/>
      <button type='button' className={ `movies-card__btn ${ btnClassMod }` }>{ saved ? null : 'Сохранить' }</button>
    </li>
  );
};

export default MoviesCard;
