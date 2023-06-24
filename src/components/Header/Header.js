import { Link, useLocation } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavAuth from '../NavAuth/NavAuth';

function Header() {
  // const loggedIn = true;
  const location = useLocation();
  return (
    <header className={`header root__content ${location.pathname === '/' ? 'header_auth' : ''}`}>
      <Link className='header__logo' to='/'>
        <img className='header__image' src={logo} alt='Логотип'></img>
      </Link>
      {/* {loggedIn ? <Navigation /> : <NavAuth />} */}
      { location.pathname === '/' ? <NavAuth /> : <Navigation />}
    </header>
  )
}

export default Header;