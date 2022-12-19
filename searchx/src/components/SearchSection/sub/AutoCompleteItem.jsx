import { search } from '../../../utils/searchUtil';
import { updateSearchHistory } from '../../../utils/storageUtil';

import icon_magglass from '../../../icons/mag_glass.svg';
import icon_close from '../../../icons/close.svg';

const AutoCompleteItem = ({ value = '', type = 'autocomplete', setInputValue = function(){} }) => {

  const typeClass = type === 'history' ? 'searchx__search__input-wrapper__list-wrapper__ac-item--history' : '';

  function handleItemClick() {
    setInputValue(value);
    search(value);
  }

  function handleRemoveHistory(e) {
    e.stopPropagation();
    updateSearchHistory(value, true);
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

      {type === 'history' &&
        <span className="searchx__search__input-wrapper__list-wrapper__ac-item__remove" onClick={handleRemoveHistory}>Delete</span>
      }
    </div>
  )
}

export default AutoCompleteItem;