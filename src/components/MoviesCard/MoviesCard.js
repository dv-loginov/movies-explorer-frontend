import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { duration } from '../../utils/cartsFilter';

const MoviesCard = ({card, handleAddCard, handleDelCard}) => {
  let location = useLocation();

  const isSaved = location.pathname === '/movies'
    ? card.isSaved
    : true;

  const img = location.pathname === '/movies'
    ? card.image.url
    : card.image;

  const handleAdd = () => {
    handleAddCard(card);
  }

  const handleDel = () => {
    handleDelCard(card);
  }

  const btnClassMod = location.pathname === '/movies'
    ? isSaved && 'movies-card__btn_mark-unmark'
    : 'movies-card__btn_mark-delete';


  return (
    <li className='movies-card'>
      <div className="movies-card__header">
        <div className="movies-card__name" title={ card.nameRU }>{ card.nameRU }</div>
        <div className="movies-card__time" title={ duration(card.duration) }>{ duration(card.duration) }</div>
      </div>
      <img src={ `https://api.nomoreparties.co${ img }` } alt={ `обложка фильма ${ card.nameRU }` }
           className="movies-card__cover"/>
      <button
        type='button'
        onClick={ isSaved ? handleDel : handleAdd }
        className={ `movies-card__btn ${ btnClassMod }` }>{ isSaved ? null : 'Сохранить' }
      </button>
    </li>
  );
};

export default MoviesCard;
