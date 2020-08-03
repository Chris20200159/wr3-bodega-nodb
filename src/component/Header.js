import React from 'react';
import './Header.css'

const Header = () => {
  return <header className="my-header">
    <p className="location-title">E Tremont Bronx,NY Phone: (718)555-4563</p>
    <h1 className="header-title">Lou's BODEGA</h1>
    <div className='btn-container'></div>
        <button 
        className="checkout-btn">Checkout</button> 
      
  </header>
};

export default Header;