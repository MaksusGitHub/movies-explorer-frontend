import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css'
import accountIcon from '../../images/account-icon.svg';

function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleToggleMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <nav className='nav'>
      <button className='nav__btn-menu' type='button' onClick={handleToggleMenu}></button>
      <div className={`nav__container ${showMobileMenu ? 'nav__container_mobile' : ''}`}>
        <div className='nav__sidebar'>
          <div className='nav__menu-container'>
            <button className='nav__btn-menu-close' type='button' onClick={handleToggleMenu}></button>
            <ul className='nav__menu-list'>
              <li className='nav__menu-item'>
                <Link to='/' className='nav__menu-link nav__menu-link_main'>Главная</Link>
              </li>
              <li className='nav__menu-item'>
                <Link to='/' className='nav__menu-link'>Фильмы</Link>
              </li>
              <li className='nav__menu-item'>
                <Link to='/' className='nav__menu-link'>Сохранённые фильмы</Link>
              </li>
            </ul>
          </div>
          <Link to='/' className='nav__account-link'>
            <img className='nav__account-img' src={accountIcon} alt='Иконка аккаунта'></img>
            Аккаунт
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;