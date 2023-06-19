import { Link } from 'react-router-dom';
import './NavAuth.css'

function NavAuth() {
  return (
    <nav className='nav-auth'>
      <ul className='nav-auth__list'>
        <li>
          <Link to='/' className='nav-auth__item'>Регистрация</Link>
        </li>
        <li>
          <Link to='/' className='nav-auth__item nav-auth__item_signin'>Войти</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavAuth;