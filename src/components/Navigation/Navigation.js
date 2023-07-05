import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css'
import accountIcon from '../../images/account-icon.svg';

function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleToggleMenu = () => setShowMobileMenu(!showMobileMenu);
  const closeMobileMenu = () => setShowMobileMenu(false);
  
  const location = useLocation();

  return (
    <nav className='nav'>
      <button className='nav__btn-menu' type='button' onClick={handleToggleMenu}></button>
      <div className={`nav__container ${showMobileMenu ? 'nav__container_mobile' : ''}`}>
        <div className={`nav__sidebar ${location.pathname !== '/' ? 'nav__sidebar_color' : ''}`}>
          <div className='nav__menu-container'>
            <button className='nav__btn-menu-close' type='button' onClick={handleToggleMenu}></button>
            <ul className='nav__menu-list'>
              <li className={`nav__menu-item ${location.pathname === '/' && 'nav__menu-item_underscore'}`}>
                <Link to='/' className='nav__menu-link nav__menu-link_main' onClick={closeMobileMenu}>Главная</Link>
              </li>
              <li className={`nav__menu-item ${location.pathname === '/movies' && 'nav__menu-item_underscore'}`}>
                <Link to='/movies'
                  className={`nav__menu-link ${location.pathname === '/movies' && 'nav__menu-link_bold'}`}
                  onClick={closeMobileMenu}>
                  Фильмы
                </Link>
              </li>
              <li className={`nav__menu-item ${location.pathname === '/saved-movies' && 'nav__menu-item_underscore'}`}>
                <Link to='/saved-movies'
                  className={`nav__menu-link ${location.pathname === '/saved-movies' && 'nav__menu-link_bold'}`}
                  onClick={closeMobileMenu}>
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
          </div>
          <Link to='/profile' className='nav__account-link' onClick={closeMobileMenu}>
            <img className='nav__account-img' src={accountIcon} alt='Иконка аккаунта'></img>
            Аккаунт
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;