import './PageMovies.css';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import NavAuth from '../NavAuth/NavAuth';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import { cardsFilter, setFlagSaved } from '../../utils/cartsFilter';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

const PageMovies = () => {
  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCard] = useState([]);
  const [shortFilter, setShortFilter] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleSetNotFount = (value) => {
    setNotFound(value);
  }

  const renderMovies = ({shortFilter, searchString}) => {
    // console.log(`render shortFilter = ${ shortFilter }, searchString = ${ searchString }`);
    if (cards.length === 0) {
      setLoading(true);
      moviesApi.getMovies()
        .then((data) => {
          setCards(data);
          setFilteredCard(
            cardsFilter(
              data,
              searchString,
              shortFilter,
              handleSetNotFount,
              savedCards,
              currentUser));
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    } else {
      setFilteredCard(
        cardsFilter(
          cards,
          searchString,
          shortFilter,
          handleSetNotFount,
          savedCards,
          currentUser));
    }
  }

  const handleSetShortFilter = ({newShortFilter, searchString}) => {
    setShortFilter(newShortFilter);
    if (searchString.length !== 0) renderMovies({shortFilter: newShortFilter, searchString});
  }

  const handleSearchSubmit = ({searchString}) => {
    renderMovies({shortFilter, searchString});
  }

  const handleAddCard = (card) => {
    mainApi.addCard({card})
      .then((data) => {
        setSavedCards([data, ...savedCards]);
        setFilteredCard((state) => state.map((c) => {
            if (c.id === data.movieId) {
              c.isSaved = true;
            }
            return c;
          }
        ));
      })
      .catch((err) => console.error(err))
  }

  const handleDelCard = (card) => {
    mainApi.delCard(card.id).then(() => {
        setSavedCards((state) => state.filter((c) => c.movieId !== card.id));
        setFilteredCard((state) => state.map((c) => {
            if (c.id === card.id) {
              c.isSaved = false;
            }
            return c;
          }
        ));
      }
    ).catch((err) => console.error(err));
  }

  useEffect(() => {
    if (localStorage.getItem(`user-${ currentUser.email }`) !== null) {
      setLoading(true);
      mainApi.getMovies()
        .then((savedCards) => {
          const {cards, string, short} = JSON.parse(localStorage.getItem(`user-${ currentUser.email }`));
          setShortFilter(short);
          setSearchString(string);
          setSavedCards(savedCards);
          setFilteredCard(setFlagSaved(cards, savedCards));
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    } else {
      mainApi.getMovies()
        .then((savedCards) => {
          setSavedCards(savedCards);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }

  }, []);

  return (
    <>
      <Header type='app'>
        <Logo/>
        <NavAuth/>
      </Header>
      <SearchForm handleSubmit={ handleSearchSubmit }
                  handleShortFilter={ handleSetShortFilter }
                  shortFilter={ shortFilter }
                  oldSearchString={ searchString }
      />
      <main className="movies">
        <div className="movies__container">
          { isLoading
            ? <Preloader/>
            : notFound
              ? <h2>Ничего не найдено</h2>
              : <MoviesCardList
                cards={ filteredCards }
                handleAddCard={ handleAddCard }
                handleDelCard={ handleDelCard }/>
          }
          { isMore && <button className="movies__btn-next">Еще</button> }
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default PageMovies;
