const KEY_SEARCH_HISTORY = 'searchx_search_history';

function updateSearchHistory(searchValue = '', toRemove = false) {
  let searchHistory = getSearchHistory();
  if (searchValue) {
    if(!searchHistory.includes(searchValue)) {
      searchHistory.push(searchValue);
    }
    if (toRemove) {
      let indexToRemove = searchHistory.indexOf(searchValue);
      searchHistory.splice(indexToRemove, 1);
    }
    window.localStorage.setItem(KEY_SEARCH_HISTORY, JSON.stringify(searchHistory));
  }
}

function getSearchHistory() {
  let searchHistory = window.localStorage.getItem(KEY_SEARCH_HISTORY);
  return JSON.parse(searchHistory) || [];
}

export {
  updateSearchHistory,
  getSearchHistory
}