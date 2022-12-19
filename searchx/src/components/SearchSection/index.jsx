import { useState, useRef } from 'react';
import useAutoComplete from '../../hooks/useAutoComplete';
import { updateSearchHistory, getSearchHistory } from '../../utils/storageManager';

import AutoCompleteList from './sub/AutoCompleteList';

import icon_magglass from '../../icons/mag_glass.svg'
import icon_microphone from '../../icons/microphone.svg'
import icon_close from '../../icons/close.svg'
import { useEffect } from 'react';

const SearchSection = ({ searchParams }) => {

  const [inputValue, setInputValue] = useState(searchParams);
  const [showAutoCompleteList, setShowAutoCompleteList] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const autoCompleteResults = useAutoComplete(inputValue);
  const searchHistory = getSearchHistory();

  const resultsShowenClass = searchParams ? 'searchx__search--minimized' : '';
  const focusedClass = (showAutoCompleteList && (autoCompleteResults?.length > 0 || searchHistory?.length > 0)) ? 'focused' : '';

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if(!e?.path?.includes(containerRef.current)) {
        setShowAutoCompleteList(false);
      }
    }, false);
  }, []);

  useEffect(() => {
    inputRef.current?.addEventListener('keydown', handleEnterPress, false);

    return () => { inputRef.current?.removeEventListener('keydown', handleEnterPress, false); }
  }, [inputValue]);

  function handleEnterPress(e) {
    if(e.keyCode === 13) {
      updateSearchHistory(inputValue);
      window.location.search = `?q=${inputValue.replace(/\s/g, '+')}`;
    }
  }

  function handleSetInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleClearInputValue() {
    inputRef.current.focus();
    setInputValue('');
  }

  function handleInputFocus() {
    setShowAutoCompleteList(true)
  }

  function handleInputWrapperClick() {
    inputRef.current.focus();
  }

  return (
    <div className={`searchx__search | ${resultsShowenClass}`}>
      {/* input wrapper */}
      <div className={`searchx__search__input-wrapper | ${focusedClass}`} ref={containerRef} onClick={handleInputWrapperClick}>
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
          ref={inputRef}
          value={inputValue}
          onChange={handleSetInputValue}
          onFocus={handleInputFocus}
          autoComplete="off"
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
        {showAutoCompleteList && (autoCompleteResults?.length > 0 || searchHistory?.length > 0) && <AutoCompleteList items={autoCompleteResults} history={searchHistory} setInputValue={setInputValue} />}
      </div>
    </div>
  )
}

export default SearchSection;