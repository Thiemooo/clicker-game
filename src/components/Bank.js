import React from 'react';
import './css/Bank.css'
import { useSelector } from 'react-redux/es/exports';

function Bank() {
  const bank = useSelector(state => state.bank);

  return (
    <div className='bank'>
      <div className='bank-content'>
        <h1> {bank.balance }$       </h1>
        <h2> {bank.perSec  }$/sec   </h2>
        <h3> {bank.perClick}$/click </h3>
      </div>
    </div>
  );
}

export default Bank;
