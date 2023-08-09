import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({name, time, cover, saved}) => {
  let location = useLocation();
  console.log(location.pathname);
  const btnClassMod = location.pathname === '/movies'
    ? saved && 'movies-card__btn_mark-unmark'
    : 'movies-card__btn_mark-delete';

  return (
    <li className='movies-card'>
      <div className="movies-card__header">
        <div className="movies-card__name" title={ name }>{ name }</div>
        <div className="movies-card__time" title={ time }>{ time }</div>
      </div>
      <img src={ cover } alt="обложка фильма" className="movies-card__cover"/>
      <button className={ `movies-card__btn ${ btnClassMod }` }>{ saved ? null : 'Сохранить' }</button>
    </li>
  );
};

export default MoviesCard;
