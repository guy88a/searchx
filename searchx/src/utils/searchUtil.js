import { updateSearchHistory } from './storageUtil';

function search(inputValue = '') {
  updateSearchHistory(inputValue);
  window.location.search = `?q=${inputValue.replace(/\s/g, '+')}`;
}

export {
  search,
}