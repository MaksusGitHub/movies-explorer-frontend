import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavAuth from '../NavAuth/NavAuth';

function Header() {
  const loggedIn = false;
  return (
    <header className={`header root__content ${loggedIn === false ? 'header_auth' : ''}`}>
      <Link className='header__logo' to='/'>
        <img className='header__image' src={logo} alt='Логотип'></img>
      </Link>
      {loggedIn ? <Navigation /> : <NavAuth />}
    </header>
  )
}

export default Header;