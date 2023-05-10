import React from 'react'
import ProductsPage from './ProductsPage'

function SearchBar({filter}) {

    const handleChange = (e) => {filter(e.target.value)}
    
  return (
    <div> <input
    type="text"
    placeholder="Search"
    onChange={handleChange}
  /></div>
  )
}

export default SearchBar