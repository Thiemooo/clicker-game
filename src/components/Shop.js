import React from 'react';
import './css/Shop.css';
import Shopitem from './Shopitem';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Shop() {
  const shop = useSelector(state => state.shop);

  return (
    <div className='shop'>
      <h1>Shop</h1>
      <div className='shop-content'>
        <div className='shop-item'><Shopitem shopitemInfo={shop[0]} /></div>
        <div className='shop-item'><Shopitem shopitemInfo={shop[1]} /></div>
        <div className='shop-item'><Shopitem shopitemInfo={shop[2]} /></div>
        <div className='shop-item'><Shopitem shopitemInfo={shop[3]} /></div>
        <div className='shop-item'><Shopitem shopitemInfo={shop[4]} /></div>
        <div className='shop-item'><Shopitem shopitemInfo={shop[5]} /></div>
      </div>
    </div>
  );
}

export default Shop;
