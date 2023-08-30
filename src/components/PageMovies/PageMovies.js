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
import { useMediaQuery } from '../../utils/useMediaQuery';
import {
  LG_INITIAL_CARD_COUNT,
  LG_ROW_CARD_COUNT,
  MD_INITIAL_CARD_COUNT,
  MD_ROW_CARD_COUNT, SM_INITIAL_CARD_COUNT,
  SM_ROW_CARD_COUNT
} from '../../utils/const';

const PageMovies = () => {
  const currentUser = useContext(CurrentUserContext);

  const isDesktop = useMediaQuery("(min-width: 1138px)");
  const isTablet = useMediaQuery("(min-width: 740px)");

  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCard] = useState([]);
  const [shortFilter, setShortFilter] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const cardColumnCount = isDesktop
    ? LG_ROW_CARD_COUNT
    : isTablet
      ? MD_ROW_CARD_COUNT
      : SM_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? LG_INITIAL_CARD_COUNT
    : isTablet
      ? MD_INITIAL_CARD_COUNT
      : SM_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] = useState(initialCardCount);

  const roundedVisibleCardCount =
    Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount;

  const calculateCardCount = () => {
    const cardColumnCount = isDesktop
      ? LG_ROW_CARD_COUNT
      : isTablet
        ? MD_ROW_CARD_COUNT
        : SM_ROW_CARD_COUNT*2;

    setVisibleCardCount(visibleCardCount + cardColumnCount);

    if (filteredCards.length <= visibleCardCount+cardColumnCount) setIsMore(false);
  };

  const handleSetNotFount = (value) => {
    setNotFound(value);
  }

  const renderMovies = ({shortFilter, searchString}) => {
    if (cards.length === 0) {
      setLoading(true);
      moviesApi.getMovies()
        .then((data) => {
          setCards(data);
          const fcard = cardsFilter(
            data,
            searchString,
            shortFilter,
            handleSetNotFount,
            savedCards,
            currentUser);
          setIsMore(fcard.length > initialCardCount);
          setFilteredCard(fcard);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    } else {
      const fcard = cardsFilter(
        cards,
        searchString,
        shortFilter,
        handleSetNotFount,
        savedCards,
        currentUser);
      setIsMore(fcard.length > initialCardCount);
      setFilteredCard(fcard);
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

  const handleClickMore = () => {
    calculateCardCount();
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
          setIsMore(cards.length > initialCardCount);
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
                cards={ filteredCards.slice(0, roundedVisibleCardCount) }
                handleAddCard={ handleAddCard }
                handleDelCard={ handleDelCard }/>
          }
          { isMore && <button onClick={ handleClickMore } className="movies__btn-next">Еще</button> }
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default PageMovies;
