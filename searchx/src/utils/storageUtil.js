const KEY_SEARCH_HISTORY = 'searchx_search_history';
const KEY_VISIT_HISTORY = 'searchx_visit_history';

function updateSearchHistory(searchValue = '') {
    let searchHistory = getSearchHistory();
    if(searchValue && !searchHistory.includes(searchValue)) {
        searchHistory.push(searchValue);
        window.localStorage.setItem(KEY_SEARCH_HISTORY, JSON.stringify(searchHistory));
    }
}

function getSearchHistory() {
    let searchHistory = window.localStorage.getItem(KEY_SEARCH_HISTORY);
    console.info(searchHistory);
    return JSON.parse(searchHistory) || [];
}

export {
    updateSearchHistory,
    getSearchHistory
}