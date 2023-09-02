import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
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
import Preloader from '../Preloader/Preloader';

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

  const handleLogin = ({email, password, handleError}) => {
    MainApi.authorize({email, password})
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user)
        navigate('/movies');
      })
      .catch((err) => {
        handleError(err);
        console.error(err);
      })
  }

  const handleExit = () => {
    setLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem(`user-${ currentUser.email }`);
    navigate('/');
  };

  if (isLoggedIn === null) {
    return <Preloader/>;
  }

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className='app'>
        <Routes>
          <Route path='/' element={ <PageMain isLoggedIn={ isLoggedIn }/> }/>

          <Route
            path='/signin'
            element={
              !isLoggedIn
                ? <PageLogin handleLogin={ handleLogin }/>
                : <Navigate to="/" replace/>
            }/>

          <Route
            path='/signup'
            element={
              !isLoggedIn
                ? <PageRegister handleRegister={ handleRegister }/>
                : <Navigate to="/" replace/>
            }/>
          }/>

          <Route path='/movies' element={
            <ProtectedRoute
              component={ <PageMovies isLoggedIn={ isLoggedIn }/> }
              isLoggedIn={ isLoggedIn }
            />
          }/>

          <Route path='/saved-movies' element={
            <ProtectedRoute
              component={ <PageSavedMovies/> }
              isLoggedIn={ isLoggedIn }
            />
          }/>

          <Route path='/profile' element={
            <ProtectedRoute
              component={ <PageProfile handleExit={ handleExit }/> }
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
