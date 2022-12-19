import { search } from '../../../utils/searchUtil';

import icon_magglass from '../../../icons/mag_glass.svg'

const AutoCompleteItem = ({ value = '', type = 'autocomplete', setInputValue = function(){} }) => {

  const typeClass = type === 'history' ? 'searchx__search__input-wrapper__list-wrapper__ac-item--history' : '';

  function handleItemClick() {
    setInputValue(value);
    search(value);
    // window.location.search = `?q=${value.replace(/\s/g, '+')}`;
  }

  return (
    <div
      className={`searchx__search__input-wrapper__list-wrapper__ac-item | ${typeClass}`}
      onClick={handleItemClick}
    >
      {/* search icon */}
      <img className="searchx__search__input-wrapper__list-wrapper__ac-item__icon"
      src={icon_magglass}
      alt="autocomplete result"
      />
      <div className="searchx__search__input-wrapper__list-wrapper__ac-item__text">{value}</div>
    </div>
  )
}

export default AutoCompleteItem;