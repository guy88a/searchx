import { useEffect, useState } from "react";
import { getSearchHistory } from "../utils/storageUtil";
import AUTOCOMPLETE from "../database/db_autocomplete";

const useAutoComplete = (inputValue = '') => {
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const filteredResults = AUTOCOMPLETE.filter((item, i) => {
      return inputValue && item.startsWith(inputValue);
    })
    setResults(filteredResults);
  }, [inputValue]);

  useEffect(() => {
    const filteredResults = getSearchHistory().filter((item, i) => {
      return item.startsWith(inputValue);
    })
    setHistory(filteredResults);
  }, [inputValue]);

  return {
    autoCompleteResults: results,
    searchHistory: history
  };
};

export default useAutoComplete;