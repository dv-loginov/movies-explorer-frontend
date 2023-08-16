import './PageMovies.css';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import NavAuth from '../NavAuth/NavAuth';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import cover_1 from '../../images/cover_1.png';
import cover_2 from '../../images/cover_2.png';

const PageMovies = () => {
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
      saved: false,
    },
    {
      name: 'В погоне за Бенкси',
      time: '2 часа 45 минут',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRzHHirDMQU_v0RHsILVKVt2O2RzpYR_EA_wiH5XaZQiOO_SBqb_8clGzD2cNXMTFoB0&usqp=CAU',
      saved: false,
    }
  ];

  const testCards = [...setTest, ...setTest, ...setTest];

  return (
    <>
      <Header type='app'>
        <Logo/>
        <NavAuth/>
      </Header>
      <main className="movies">
        <div className="movies__container">
          <SearchForm/>
          <MoviesCardList cards={ testCards }/>
          <button className="movies__btn-next">Еще</button>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default PageMovies;
