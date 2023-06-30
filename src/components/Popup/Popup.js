import './Popup.css';

function Popup({ title, isOpen, onClose}) {

  return (
    <div className={`popup ${isOpen ? '' : 'popup_hidden'}`}>
      <div className='popup__container'>
        <button className='popup__close-btn' type='button' onClick={onClose} />
        <p className='popup__title'>{title}</p>
      </div>
    </div>
  )
}

export default Popup;