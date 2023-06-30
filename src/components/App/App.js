import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';
import './App.css';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import { MainApi } from '../../utils/MainApi';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Popup from '../Popup/Popup';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    tokenCheck();
  }, [])
  
  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setLoggedIn(true);
    }
  }

  useEffect(() => {
    if (loggedIn) {
      MainApi.getProfile().then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
      })
        .catch((err) => {
          console.log(err);
        })
    }
    setIsLoading(false);
  }, [loggedIn])


  const handleRegister = ({name, email, password}) => {
    MainApi.register(name, email, password).then(() => {
      navigate('/signin', { replace: true });
    })
      .catch((err) => {
        openPopup(`Не удалось зарегистрироваться. ${err}`);
      });
  }

  const handleLogin = ({email, password}) => {
    MainApi.authorize(email, password).then(() => {
      setLoggedIn(true);
      navigate('/movies', { replace: true });
    })
      .catch((err) => {
        openPopup(`Не удалось авторизоваться. ${err}`);
      });
  }

  const handleSignOut = () => {
    MainApi.logOut().then(() => {
      setCurrentUser({});
      setLoggedIn(false);
      navigate('/')
      localStorage.clear();
    })
      .catch((err) => {
        openPopup(`Не удалось выйти из профиля. ${err}`);
      });
  }

  const handleUpdateUser = (user) => {
    MainApi.updateProfile(user).then((user) => {
      setCurrentUser(user);
      openPopup('Изменения сохранены!');
    })
      .catch((err) => {
        openPopup(`Что-то пошло не так! ${err}`);
      });
  }

  function openPopup(title) {
    setPopupTitle(title);
    setIsPopupOpen(true);
  }

  const closePopup = () => {
    setIsPopupOpen(false);
  }

  useEffect(() => {
    if (setIsPopupOpen) {
      function handleEsc(evt) {
        if (evt.key === 'Escape') {
          closePopup();
        }
      }

      document.addEventListener('keydown', handleEsc);
      return () => {
        document.removeEventListener('keydown', handleEsc);
      }
    }
  }, [isPopupOpen]);

  return (
    <div className='root'>
      <CurrentUserContext.Provider value={currentUser}>
        {
          location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile' ?
            <Header loggedIn={loggedIn} isLoading={isLoading} /> : ''
        }

        <Routes>

          {!loggedIn ? (
            <>
              <Route
                path='/signup'
                element={
                  <Register onSubmit={handleRegister} />
                }
              />
              <Route
                path='/signin'
                element={<Login onSubmit={handleLogin} />}
              />
            </>
          ) : null}

          <Route
            path='/'
            element={
              <Main />
            }
          />

          <Route
            path='/movies'
            element={
              <ProtectedRoute
                component={Movies}
                loggedIn={loggedIn}
                openPopup={openPopup}
              />
            }
          />

          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                component={SavedMovies}
                loggedIn={loggedIn}
                openPopup={openPopup}
              />
            }
          />
          
          <Route
            path='/profile'
            element={
              <ProtectedRoute 
                component={Profile}
                loggedIn={loggedIn}
                onSubmit={handleUpdateUser}
                onSignOut={handleSignOut}
              />
            }
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
        
        <Popup title={popupTitle} isOpen={isPopupOpen} onClose={closePopup}/>

        {
          location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' ?
            <Footer /> : ''
        }

      </CurrentUserContext.Provider>
    </div>
  )
}

export default App;
