import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


const MoviesCardList = ({cards, handleAddCard, handleDelCard}) => {

  // console.log(cards);

  const cardsList = cards.map((card) =>
    <MoviesCard card={ card }
                key={ card.id||card._id }
                handleAddCard={ handleAddCard }
                handleDelCard={ handleDelCard }/>);

  return (
    <div className='movies-card-list'>
      <ul className="movies-card-list__grid">
        { cardsList }
      </ul>
    </div>
  );
};

export default MoviesCardList;
