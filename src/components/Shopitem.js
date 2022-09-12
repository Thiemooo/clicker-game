import React from 'react';
import './css/Shopitem.css';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { buy } from '../store/action';

function Shopitem({shopitemInfo}) {
  const dispatch = useDispatch();

  return (
    <div className='shopitem'>
      <h2>Shopitem</h2>
      <div className='shopitem-content'>
        <div className='shopitem-top'>
          Name: {shopitemInfo.name}
        </div>
        <div className='shopitem-mid'>
            <p>+{shopitemInfo.perSec}$/sec</p>
            <p>+{shopitemInfo.perClick}$/click</p>
            <p>Level: {shopitemInfo.level}</p>
        </div>
        <div className='shopitem-bot'>
          <button onClick={() => { dispatch(buy(shopitemInfo)) }}>Buy: {shopitemInfo.price}$</button>
        </div>
      </div>
    </div>
  );
}

export default Shopitem;
