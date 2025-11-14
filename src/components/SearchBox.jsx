function SearchBox({ searchTerm, setSearchTerm }) {
  return (
    <input
      className='search-box'
      type="text"
      placeholder="Search books..."
      value={searchTerm} // controlled input
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBox;
