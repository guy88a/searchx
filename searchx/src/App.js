import ResultsSection from "./components/ResultsSection";
import SearchSection from "./components/SearchSection";

function App() {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const searchParams = urlParams.get('q') || '';

  return (
    <section className="searchx">
      <SearchSection searchParams={searchParams} />
      <ResultsSection searchParams={searchParams} />
    </section>
  );
}

export default App;
