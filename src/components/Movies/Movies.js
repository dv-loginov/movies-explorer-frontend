import './Movies.css';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import NavAuth from '../NavAuth/NavAuth';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  console.log('Movies');
  return (
    <>
      <Header type='app'>
        <Logo/>
        <NavAuth/>
      </Header>
      <main className="movies">
        <SearchForm/>
        <MoviesCardList/>
      </main>
      <Footer/>
    </>
  );
};

export default Movies;
