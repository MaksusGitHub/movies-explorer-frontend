import { Link } from 'react-router-dom';

import './AuthForm.css'
import logo from '../../images/logo.svg';

function AuthForm(props) {
  const { title, btnName, help, link } = props;

  return (
    <section className='auth-form root__content'>
      <Link className='header__logo' to='/'>
        <img src={logo} alt='Логотип'></img>
      </Link>
      <h1 className='auth-form__title'>{title}</h1>
      <form className='auth-form__container'>
        {props.children}
        <div className='auth-form__manage-container'>
          <button className='auth-form__submit-btn'>{btnName}</button>
          <p className='auth-form__help'>
            {help}
            <Link className='auth-form__link' to='/'>{link}</Link>
          </p>
        </div>
      </form>
    </section>
  )
}

export default AuthForm;