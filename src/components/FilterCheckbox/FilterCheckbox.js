import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input className='filter-checkbox__switch' type='checkbox'></input>
        <span className='filter-checkbox__slider'></span>
      </label>
      <p className='filter-checkbox__name'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;