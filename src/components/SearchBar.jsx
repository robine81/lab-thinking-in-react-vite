import React from 'react'
import ProductsPage from './ProductsPage'

function SearchBar({filterProducts}) {

    // Handle Search Bar Input Change
    const handleInputChange = (event) => {
      filterProducts(event.target.value);
    };
    
  return (
    <div> <input
    type="text"
    placeholder="Search"
    onChange={handleInputChange}
  /></div>
  )
}

export default SearchBar
