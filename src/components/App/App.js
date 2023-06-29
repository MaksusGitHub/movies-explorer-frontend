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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    tokenCheck();
  }, [])

  useEffect(() => {
    MainApi.getProfile().then((res) => {
      setCurrentUser(res);
    })
      .catch((err) => {
        console.log(err);
        return;
      })
      .finally(() => {
        setIsLoading(false);
    })
  }, [])

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      MainApi.getContent(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      });
    }
  }

  const handleRegister = ({name, email, password}) => {
    MainApi.register(name, email, password).then(() => {
      navigate('/signin', { replace: true });
    })
      .catch((err) => {
        console.log(err);
        return;
      });
  }

  const handleLogin = ({email, password}) => {
    MainApi.authorize(email, password).then(() => {
      setLoggedIn(true);
      navigate('/movies', { replace: true });
    })
      .catch((err) => {
        console.log(err);
        return;
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
        console.log(err);
        return;
      });
  }

  const handleUpdateUser = (user) => {
    MainApi.updateProfile(user).then((user) => {
      setCurrentUser(user);
    })
    .catch((err) => {
      console.log(err);
      return;
    });
  }

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
              />
            }
          />

          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                component={SavedMovies}
                loggedIn={loggedIn}
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

        {
          location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' ?
            <Footer /> : ''
        }

      </CurrentUserContext.Provider>
    </div>
  )
}

export default App;
