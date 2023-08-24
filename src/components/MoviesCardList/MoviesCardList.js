import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


const MoviesCardList = ({cards}) => {

  const cardsList = cards.map((card) =>
    <MoviesCard card={card}
                key={ card.id }/>);

  return (
    <div className='movies-card-list'>
      <ul className="movies-card-list__grid">
        { cardsList }
      </ul>
    </div>
  );
};

export default MoviesCardList;
