import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from '../../../redux/counterSlice';

import firePlace from '../../../images/fireplace_christmas.svg';
import bulbOff from '../../../images/pic_bulboff.gif';
import bulbOn from '../../../images/pic_bulbon.gif';

export const UsingImage = () => {
  const [isOn, setIsOn] = useState(false);
  const divStyle = {
    border: '2px solid black',
    width: '70%',
    height: '50vh',
    background: 'url("/images/photo-2.jpg") center no-repeat',
  };

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h3>Using Image</h3>
      <hr />

      Amount <input type='number' value={amount} onChange={(e) => {
        setAmount(parseInt(e.target.value))
      }} />{' '}
      <button onClick={()=>{
        dispatch(incrementByAmount(amount))
      }}>Increase</button>
      <p>counter in redux : {counter} </p>
      <hr />

      <img src={firePlace} alt='sdsds' style={{ display: 'block', width: '200px' }} />
      <hr />
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        Toggle On|Off
      </button>
      <img src={isOn ? bulbOn : bulbOff} alt='' />
      <hr />
      <img src='/images/photo-1.jpg' alt='' />
      <hr />
      <div style={divStyle}></div>
    </div>
  );
};
