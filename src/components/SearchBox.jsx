function SearchBox({searchTerm, setSearchTerm}) {

  return (
    <input
      className=""
      type='text' 
      placeholder='Search books...'
      value={searchTerm} // controlled input
      onChange={(e) => setSearchTerm(e.target.value)}
    
    />
  )
}

export default SearchBox
