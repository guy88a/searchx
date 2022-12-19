import { useState } from "react";
import AutoCompleteItem from './AutoCompleteItem';

const AutoCompleteList = ({ items = [], history = [], setInputValue = function(){} }) => {

  const itemsLimit = 10;
  let itemsRendered = 0;
  const listHeight = (items?.length + history?.length) * 30;

  return (
    <div className="searchx__search__input-wrapper__list-wrapper" style={{ height: `${listHeight}px` }}>
      {
        history.map((item, i) => {
          if(itemsRendered >= itemsLimit) { return false; }
          itemsRendered++;
          return (
            <AutoCompleteItem
              value={item}
              type={'history'}
              key={`history-item-${i}`}
              setInputValue={setInputValue}
            />
          )
        })
      }
      {
        items.map((item, i) => {
          if(itemsRendered >= itemsLimit) { return false; }
          itemsRendered++;
          return (
            <AutoCompleteItem
              value={item}
              type={'autocomplete'}
              key={`ac-item-${i}`}
              setInputValue={setInputValue}
            />
          )
        })
      }
    </div>
  )
}

export default AutoCompleteList;