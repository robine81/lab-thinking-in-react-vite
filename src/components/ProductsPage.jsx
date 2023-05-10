import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setfilteredProducts] = useState(products)
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (e) => {
    const searchQuery = e.target.value
    setSearchTerm(searchQuery)

    const filterProducts = products.filter((productItem) => {
        return productItem.name.includes(searchTerm)
    })
    setfilteredProducts(filterProducts)
  };


  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar filter= {filteredProducts}/>
        <ProductsTable data = {products}/>
      </div>    
  )
}

export default ProductsPage