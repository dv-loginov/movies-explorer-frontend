import './PageSavedMovies.css';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import NavAuth from '../NavAuth/NavAuth';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import cover_1 from '../../images/cover_1.png';
import cover_2 from '../../images/cover_2.png';

const PageSavedMovies = () => {
  const setTest = [
    {
      name: 'В погоне за Бенкси',
      time: '27 минут',
      cover: cover_1,
      saved: true,
    },
    {
      name: 'В погоне за Бенкси и очень длинное название',
      time: '27 минут',
      cover: cover_2,
      saved: true,
    },
    {
      name: 'В погоне за Бенкси',
      time: '2 часа 45 минут',
      cover: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2015/02/cover-and-contain.jpg?ssl=1',
      saved: true,
    },
  ];

  const testCards = [...setTest];

  return (
    <>
      <Header type='app'>
        <Logo/>
        <NavAuth/>
      </Header>
      <main className="saved-movies">
        <div className="saved-movies__container">
          <SearchForm/>
          <MoviesCardList cards={ testCards }/>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default PageSavedMovies;
