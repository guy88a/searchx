import useSearch from '../../hooks/useSearch';

import SearchResultsItem from './sub/SearchResultsItem';

const ResultsSection = ({ searchParams, }) => {

  const { searchResults, resultsMetaData } = useSearch(searchParams);

  console.info();
  return (
    <div className="searchx__results">
      <div className="searchx__results__metabar">
        {`${resultsMetaData[0]} results (${resultsMetaData[1]} seconds)`} 
      </div>
      <div className="searchx__results__container">
        {
          searchResults.map((item, i) => {
            return <SearchResultsItem itemData={item} key={`search-result-item-${i}`} />
          })
        }
      </div>
    </div>
  )
}

export default ResultsSection;