import { useState } from 'react'

import './App.css'
import SearchBox from './components/SearchBox'
import Books from './components/Books'
import FavouriteBooks from './components/FavouriteBooks'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favouriteBooks, setFavouriteBooks] = useState([]);

  const addFavourite = book => {
    if(!favouriteBooks.some(b => b.title === book.title)){
      setFavouriteBooks([...favouriteBooks, book])
    }
  }

  const removeFavourite = book => {
    setFavouriteBooks(favouriteBooks.filter(b => b.title !== book.title))
  }

  return (
    <div>
      
      <h1>Book Finder</h1>

      <SearchBox searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
      <Books searchTerm = {searchTerm} onFavourite = {addFavourite}/>
      <FavouriteBooks
      favouriteBooks = {favouriteBooks}
      removeFavourite = {removeFavourite}
      />
    </div>
  )
}

export default App
