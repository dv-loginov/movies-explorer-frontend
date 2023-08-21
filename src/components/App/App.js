import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import PageMain from '../PageMain/PageMain';
import PageMovies from '../PageMovies/PageMovies';
import PageSavedMovies from '../PageSavedMovies/PageSavedMovies';
import PageProfile from '../PageProfile/PageProfile';
import PageLogin from '../PageLogin/PageLogin';
import PageRegister from '../PageRegister/PageRegister';
import Page404 from '../Page404/Page404';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import MainApi from '../../utils/MainApi';
import ProtectedRoute from '../../utils/ProtectedRoute';

const App = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(null);

  const checkToken = () => {
    console.log('проверка токена');
    MainApi.getUser()
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user);
        // navigate(location.pathname);
      })
      .catch((err) => {
        console.error(err);
        setLoggedIn(false);
      });
  }

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      MainApi.getUser()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.error(err));
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className='app'>
        <Routes>
          <Route path='/' element={ <PageMain isLoggedIn={ isLoggedIn }/> }/>
          <Route path='/signin' element={ <PageLogin/> }/>
          <Route path='/signup' element={ <PageRegister/> }/>

          <Route path='/movies' element={
            <ProtectedRoute
              element={ <PageMovies /> }
              isLoggedIn={ isLoggedIn }
            />
          }/>

          <Route path='/saved-movies' element={
            <ProtectedRoute
              element={ <PageSavedMovies /> }
              isLoggedIn={ isLoggedIn }
            />
          }/>

          <Route path='/profile' element={
            <ProtectedRoute
              element={ <PageProfile/> }
              isLoggedIn={ isLoggedIn }
            />
          }/>

          <Route path='*' element={ <Page404/> }/>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
