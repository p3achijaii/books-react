function SearchBox({searchTerm, setSearchTerm}) {

  return (
    <>
      
      <input type='text' 
      placeholder='Search books...'
      value={searchTerm} // controlled input
      onChange={(e) => setSearchTerm(e.target.value)}
      />
    
    </>
  )
}

export default SearchBox
