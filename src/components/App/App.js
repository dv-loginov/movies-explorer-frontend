import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(null);

  const checkToken = () => {
    MainApi.getUser()
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user);
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

  const handleRegister = ({email, password}) => {
    handleLogin({email, password});
  }

  const handleLogin = ({email, password}) => {
    MainApi.authorize({email, password})
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user)
        navigate('/movies');
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const handleExit = () => {
    setLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem(`user-${ currentUser.email }`);
    navigate('/');
  };

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className='app'>
        <Routes>
          <Route path='/' element={ <PageMain isLoggedIn={ isLoggedIn }/> }/>

          <Route
            path='/signin'
            element={ <PageLogin handleLogin={ handleLogin }/>
            }/>

          <Route
            path='/signup'
            element={
              <PageRegister handleRegister={ handleRegister }/>
            }/>

          <Route path='/movies' element={
            <ProtectedRoute
              element={ <PageMovies/> }
              isLoggedIn={ isLoggedIn }
            />
          }/>

          <Route path='/saved-movies' element={
            <ProtectedRoute
              element={ <PageSavedMovies/> }
              isLoggedIn={ isLoggedIn }
            />
          }/>

          <Route path='/profile' element={
            <ProtectedRoute
              element={ <PageProfile handleExit={ handleExit }/> }
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
