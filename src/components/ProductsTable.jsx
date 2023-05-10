import React from 'react'
import ProductRow from './ProductRow'

function ProductsTable({data}) {

    const rows = data.map((product) => (
        <ProductRow key={product.id} product={product} />
      ));
    
  return (
    <div>ProductsTable
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
        </tbody>
        </table>
    </div>
  )
}

export default ProductsTable