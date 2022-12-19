import { useEffect, useState } from "react";
import AUTOCOMPLETE from "../database/db_autocomplete";

const useAutoComplete = (inputValue = '') => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filteredResults = AUTOCOMPLETE.filter((item, i) => {
      return inputValue && item.startsWith(inputValue);
    })
    setResults(filteredResults);
  }, [inputValue]);

  return results;
};

export default useAutoComplete;