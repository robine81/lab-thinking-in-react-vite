import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

function ProductsPage () {
    // State for the products
    const [products, setProducts] = useState(jsonData);
  // State for the filtered products
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const filterProducts = (search) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar filterProducts= {filterProducts}/>
        <ProductsTable data = {filteredProducts}/>
      </div>    
  )
}

export default ProductsPage

