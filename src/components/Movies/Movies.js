import './Movies.css';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import NavAuth from '../NavAuth/NavAuth';
import Footer from '../Footer/Footer';

const Movies = () => {
  console.log('Movies');
  return (
    <>
      <Header type='app'>
        <Logo/>
        <NavAuth/>
      </Header>
      <main className="movies">

      </main>
      <Footer/>
    </>
  );
};

export default Movies;
