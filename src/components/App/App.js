import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageMain from '../PageMain/PageMain';
import PageMovies from '../PageMovies/PageMovies';
import PageSavedMovies from '../PageSavedMovies/PageSavedMovies';
import PageProfile from '../PageProfile/PageProfile';
import PageLogin from '../PageLogin/PageLogin';
import PageRegister from '../PageRegister/PageRegister';
import Page404 from '../Page404/Page404';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const App = () => {

  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={ currentUser }>
    <div className='app'>
      <Routes>
        <Route path='/' element={ <PageMain/> }/>
        <Route path='/movies' element={ <PageMovies/> }/>
        <Route path='/saved-movies' element={ <PageSavedMovies/> }/>
        <Route path='/profile' element={ <PageProfile/> }/>
        <Route path='/signin' element={ <PageLogin/> }/>
        <Route path='/signup' element={ <PageRegister/> }/>
        <Route path='*' element={ <Page404/> }/>
      </Routes>
    </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
