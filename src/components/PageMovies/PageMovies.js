import './PageMovies.css';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import NavAuth from '../NavAuth/NavAuth';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import { cardsFilter } from '../../utils/cartsFilter';
import { useState } from 'react';

const PageMovies = () => {

  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCard] = useState([]);
  const [shortFilter, setShortFilter] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSetNotFount = (value) => {
    setNotFound(value);
  }

  const renderMovies = ({shortFilter, searchString}) => {
    console.log(`render shortFilter = ${ shortFilter }, searchString = ${ searchString }`);

    if (cards.length === 0) {
      moviesApi.getMovies()
        .then((data) => {
          setCards(data);
          setFilteredCard(cardsFilter(data, searchString, shortFilter, handleSetNotFount));
        })
        .catch((err) => console.error(err));
    } else {
      setFilteredCard(cardsFilter(cards, searchString, shortFilter, handleSetNotFount));
    }
  }

  const handleSetShortFilter = ({newShortFilter, searchString}) => {
    setShortFilter(newShortFilter);
    if (searchString.length !== 0) renderMovies({shortFilter: newShortFilter, searchString});
  }

  const handleSearchSubmit = ({searchString}) => {
    renderMovies({shortFilter, searchString});
  }

  return (
    <>
      <Header type='app'>
        <Logo/>
        <NavAuth/>
      </Header>
      <SearchForm handleSubmit={ handleSearchSubmit }
                  handleShortFilter={ handleSetShortFilter }
                  shortFilter={ shortFilter }
      />
      <main className="movies">
        <div className="movies__container">
          {
            notFound
              ? <h2>Ничего не найдено</h2>
              : <MoviesCardList cards={ filteredCards }/>
          }
          {/*<MoviesCardList cards={ cards }/>*/ }
          <button className="movies__btn-next">Еще</button>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default PageMovies;
