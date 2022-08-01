import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Products = (props) => {
  const { name, img, seller, price, ratings } = props.product;
  
  return (
    <div>
      <div className='product'>
          <img src={img} alt="" />
          <h3>{name}</h3>
          <h4>Price: ${price}</h4>
          <p>Manufacturer: { seller}</p>
          <p>Rating: { ratings} star</p>
      </div>
      <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'><p>Add to cart</p>
     <FontAwesomeIcon className='icon' icon={faShoppingCart} />
      </button>
      
      
      </div>
    
  );
};

export default Products;