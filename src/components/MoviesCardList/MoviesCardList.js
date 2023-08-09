import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


const MoviesCardList = ({cards}) => {

  const testCards = cards.map((card, i) =>
    <MoviesCard name={ card.name }
                time={ card.time }
                cover={ card.cover }
                saved={ card.saved }
                key={ i }/>);

  return (
    <div className='movies-card-list'>
      <ul className="movies-card-list__grid">
        { testCards }
      </ul>
    </div>
  );
};

export default MoviesCardList;
