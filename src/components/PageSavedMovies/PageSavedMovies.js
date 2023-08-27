import './PageSavedMovies.css';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import NavAuth from '../NavAuth/NavAuth';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';
import { durationFilter, nameFilter } from '../../utils/cartsFilter';
import Preloader from '../Preloader/Preloader';

const PageSavedMovies = () => {

  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCard] = useState([]);
  const [shortFilter, setShortFilter] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleDelCard = (card) => {
    mainApi.delCard(card.movieId).then(() => {
        setCards((state) => state.filter((c) => c.movieId !== card.movieId))
        setFilteredCard((state) => state.filter((c) => c.movieId !== card.movieId))
      }
    ).catch((err) => console.error(err));
  }

  const handleSearchSubmit = ({searchString}) => {
    searchString === 'all'
      ? setFilteredCard(cards)
      : setFilteredCard(nameFilter(filteredCards, searchString));
  }

  const handleSetShortFilter = ({newShortFilter, searchString}) => {
    setShortFilter(newShortFilter);
    if (searchString === '') {
      newShortFilter
        ? setFilteredCard(durationFilter(filteredCards))
        : setFilteredCard(cards);
    } else {
      if (newShortFilter) {
        setFilteredCard(durationFilter(filteredCards))
      } else {
        setFilteredCard(nameFilter(cards, searchString));
      }
    }
  }


  useEffect(() => {
    setLoading(true);
    mainApi.getMovies()
      .then((savedCards) => {
        setCards(savedCards);
        setFilteredCard(savedCards);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header type='app'>
        <Logo/>
        <NavAuth/>
      </Header>
      <main className="saved-movies">
        <SearchForm handleSubmit={ handleSearchSubmit }
                    handleShortFilter={ handleSetShortFilter }
                    shortFilter={ shortFilter }
                    oldSearchString={ '' }
        />
        <div className="saved-movies__container">
          {
            isLoading
              ? <Preloader/>
              : filteredCards.length > 0
                ? <MoviesCardList cards={ filteredCards } handleDelCard={ handleDelCard }/>
                : <h1>Сохраненных файлов нет</h1> }
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default PageSavedMovies;
