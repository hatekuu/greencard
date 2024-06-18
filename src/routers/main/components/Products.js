import React from 'react'
import { useNavigate } from 'react-router-dom';
const Products = (probs) => {
    const navigate = useNavigate();
  return (
    <div>
    <h2>Product List</h2>
    <ul>
      {probs.data.map((product) => (
        <li key={product._id} onClick={() => navigate(`/greencard/${product._id}`)} >
          <strong>Name:</strong> {product.name}<br />
   
          <strong>Category:</strong> {product.category}<br />
          <strong>Price:</strong> ${product.price}<br />
          <strong>Description:</strong> {product.description}<br />
          <br />
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Products