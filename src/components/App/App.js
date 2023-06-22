import { Route, Routes } from 'react-router-dom';

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

function App() {

  return (
    <div className='root'>
      <Routes>
        <Route
          path='/signup'
          element={
            <Register />
          }
        />

        <Route
          path='/signin'
          element={<Login />}
        />

        <Route
          path='/'
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />

        <Route
          path='/movies'
          element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          }
        />

        <Route
          path='/saved-movies'
          element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        
        <Route
          path='/profile'
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  )
}

export default App;
