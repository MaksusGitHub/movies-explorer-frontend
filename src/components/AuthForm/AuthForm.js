import { Link, useLocation } from 'react-router-dom';

import './AuthForm.css'
import logo from '../../images/logo.svg';

function AuthForm(props) {
  const { title, btnName, help, linkName, path, onSubmit, isValid } = props;

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <section className='auth-form root__content'>
      <Link className='header__logo' to='/'>
        <img className='header__image' src={logo} alt='Логотип'></img>
      </Link>
      <h1 className='auth-form__title'>{title}</h1>
      <form className='auth-form__container' onSubmit={handleSubmit}>
        {props.children}
        <div className='auth-form__manage-container'>
          {location.pathname === '/signin' ?
            <button className='auth-form__submit-btn' type='submit' disabled={!(isValid.email && isValid.password)}>{btnName}</button> :
            <button className='auth-form__submit-btn' type='submit' disabled={!(isValid.email && isValid.password && isValid.name)}>{btnName}</button>
          }
          <p className='auth-form__help'>
            {help}
            <Link className='auth-form__link' to={path}>{linkName}</Link>
          </p>
        </div>
      </form>
    </section>
  )
}

export default AuthForm;