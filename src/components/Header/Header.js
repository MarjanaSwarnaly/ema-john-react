import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';


const Header = () => {
  return (
    <nav className='header'>
     <img src={logo} alt="" />
      <div className='primary-menu'>
        <ul>
          <li><a href="/order">Order</a></li>
          <li><a href="/order-review">Order Review</a></li>
          <li><a href="/inventory">Manage Inventory</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;