const STORAGE_KEY = 'searchx_search_history';

function updateSearchHistory(searchValue = '') {
    let searchHistory = getSearchHistory();
    if(searchValue && !searchHistory.includes(searchValue)) {
        searchHistory.push(searchValue);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(searchHistory));
    }
}

function getSearchHistory() {
    let searchHistory = window.localStorage.getItem(STORAGE_KEY);
    console.info(searchHistory);
    return JSON.parse(searchHistory) || [];
}

export {
    updateSearchHistory,
    getSearchHistory
}