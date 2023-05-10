import React from 'react'

function ProductRow({product}) {

    const outOfStock = {
        color: "red",
      };


  return (
    <tr>
        <td style={product.inStock ? {} : outOfStock}>{product.name}</td>
        <td>{product.price} </td>
    </tr>
  )
}

export default ProductRow
