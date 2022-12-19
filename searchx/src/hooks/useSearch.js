import { useEffect, useState } from "react";
import { updateSearchHistory } from '../utils/storageUtil';

import SEARCH_RESULTS from "../database/db_searchresults";

const useSearch = (searchParams = '') => {
  const [results, setResults] = useState([]);
  const [metaData, setMetaData] = useState([]);

  useEffect(() => {
    const searchValue = searchParams.split('+').join(' ');
    const filteredResults = SEARCH_RESULTS.filter((item, i) => {
      return item.title?.includes(searchValue) || item.tags?.includes(searchValue)
    });
    setResults(filteredResults)
  }, [searchParams]);

  useEffect(() => {
    const timePerItem = Math.random() * 100;
    const searchTime = Math.round(results.length * timePerItem) / 1000;
    setMetaData([
      results.length,
      searchTime,
    ]);
  }, [results]);

  function search(inputValue = '') {
    updateSearchHistory(inputValue);
    window.location.search = `?q=${inputValue.replace(/\s/g, '+')}`;
  }

  return {
    search,
    searchResults: results,
    resultsMetaData: metaData
  };
};

export default useSearch;