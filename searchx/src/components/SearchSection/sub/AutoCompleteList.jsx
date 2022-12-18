import { useState } from "react";

import icon_magglass from '../../../icons/mag_glass.svg'

const AutoCompleteList = ({ }) => {
  return (
    <div className="searchx__search__input-wrapper__list-wrapper">

      <div className="searchx__search__input-wrapper__list-wrapper__ac-item">
        {/* search icon */}
        <img className="searchx__search__input-wrapper__list-wrapper__ac-item__icon"
          src={icon_magglass}
          alt="autocomplete result"
        />
        <span>react js</span>
      </div>

      <div className="searchx__search__input-wrapper__list-wrapper__ac-item">
        {/* search icon */}
        <img className="searchx__search__input-wrapper__list-wrapper__ac-item__icon"
          src={icon_magglass}
          alt="autocomplete result"
        />
        <span>react js tutorials</span>
      </div>

    </div>
  )
}

export default AutoCompleteList;