import { useState } from 'react';

import icon_magglass from '../../icons/mag_glass.svg'
import icon_microphone from '../../icons/microphone.svg'
import icon_close from '../../icons/close.svg'
import AutoCompleteList from './sub/AutoCompleteList';

const SearchSection = ({ }) => {

  const [inputValue, setInputValue] = useState('');
  const [showAutoCompleteList, setShowAutoCompleteList] = useState(false);

  const focusedClass = showAutoCompleteList ? 'focused' : '';

  function handleSetInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleClearInputValue() {
    setInputValue('');
  }

  function handleInputFocus() {
    setShowAutoCompleteList(true)
  }

  function handleInputBlur() {
    setShowAutoCompleteList(false)
  }

  return (
    <div className="searchx__search">
      {/* input wrapper */}
      <div className={`searchx__search__input-wrapper | ${focusedClass}`}>
        {/* search icon */}
        <img className="searchx__search__input-wrapper__icon | searchx__search__input-wrapper__icon--glass"
          src={icon_magglass}
          alt="search field"
        />
        {/* search field */}
        <input
          className="searchx__search__input-wrapper__input"
          id="search-field"
          type="text"
          value={inputValue}
          onChange={handleSetInputValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {/* clear input icon */}
        {inputValue &&
          <img className="searchx__search__input-wrapper__icon | searchx__search__input-wrapper__icon--close"
            src={icon_close}
            alt="Clear input"
            onClick={handleClearInputValue}
          />}
        {/* microphone icon */}
        <img className="searchx__search__input-wrapper__icon | searchx__search__input-wrapper__icon--microphone"
          src={icon_microphone}
          alt="microphone"
        />

        {/* list wrapper */}
        {showAutoCompleteList && <AutoCompleteList />}
      </div>
    </div>
  )
}

export default SearchSection;