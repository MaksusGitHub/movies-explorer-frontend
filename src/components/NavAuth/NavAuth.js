import { Link } from 'react-router-dom';
import './NavAuth.css'

function NavAuth() {
  return (
    <nav className='nav-auth'>
      <ul className='nav-auth__list'>
        <li className='nav-auth__link'>
          <Link to='/signup' className='nav-auth__item'>
            <button type='button' className='nav-auth__btn'>Регистрация</button>
          </Link>
        </li>
        <li className='nav-auth__link'>
          <Link to='/signin' className='nav-auth__item nav-auth__item_signin'>
            <button type='button' className='nav-auth__btn'>Войти</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavAuth;