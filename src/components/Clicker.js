import React from 'react';
import './css/Clicker.css';
import { increment, second } from '../store/action';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

function Clicker() {
  const dispatch = useDispatch();

  setInterval(() => {
    dispatch(second())
  }, 1000);

  return (
    <div className='clicker'>
      <button onClick={() => { dispatch(increment()) }}>Click</button>
    </div>
  );
}

export default Clicker;
