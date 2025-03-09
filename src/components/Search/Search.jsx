import "./Search.css";

const Search = ({ errorMessage, searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <img src="../../img/search.svg" alt="search" />
      <input
        type="text"
        value={searchTerm}
        placeholder=""
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <section className="all-movies">
        <h2 className="mt-[40px]">All Movies</h2>
        {errorMessage ? <p className="text-red-500">{errorMessage}</p> : null}
      </section>
    </div>
  );
};

export default Search;
