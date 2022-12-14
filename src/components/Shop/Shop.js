import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';


const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))

  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className='shop-container'>
      <div className="product-container">
        {
          products.map(product => <Products key={product.id}
            product={product}
            handleAddToCart ={handleAddToCart}
          ></Products>)
        }
      </div>
      <div className="cart-container">
        <h2>Order Summary</h2>
        <h4>Selected Items:{cart.length} </h4>

      </div>
    </div>
  );
};

export default Shop;