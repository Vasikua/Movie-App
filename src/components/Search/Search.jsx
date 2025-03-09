import "./Search.css";

const Search = ({
  errorMessage,
  setSearchTerm,
  currentSearchTerm,
  setCurrentSearchTerm,
}) => {
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(currentSearchTerm);
      setCurrentSearchTerm("");
    }
  };

  return (
    <div className="search">
      <img src="../../img/search.svg" alt="search" />
      <input
        type="text"
        value={currentSearchTerm}
        placeholder=""
        onChange={(e) => {
          setCurrentSearchTerm(e.target.value);
        }}
        onKeyDown={handleSubmit}
      />
      <section className="all-movies">
        <h2 className="mt-[40px]">All Movies</h2>
        {errorMessage ? <p className="text-red-500">{errorMessage}</p> : null}
      </section>
    </div>
  );
};

export default Search;
