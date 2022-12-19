const SearchResultsItem = ({ itemData = {} }) => {

  return (
    <div className="searchx__results__container__search-result">
      <div className="searchx__results__container__search-result__url">
        <a href={itemData.url} className="searchx__results__container__search-result__url__anchor">{itemData.url}</a>
      </div>
      <div className="searchx__results__container__search-result__title">
        <a href={itemData.url} className="searchx__results__container__search-result__title__anchor">{itemData.title}</a>
      </div>
      <div className="searchx__results__container__search-result__description">
        {itemData.description}
      </div>
    </div>
  )
}

export default SearchResultsItem;