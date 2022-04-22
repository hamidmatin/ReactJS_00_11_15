import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterSlice, increment, decrement } from '../../../redux/counterSlice';
export const UsingRedux = () => {
  console.log(useSelector((state) => state));

  const counter = useSelector((state) => state.counter.value);
  const message = useSelector((state) => state.helloRedux);

  const dispatch = useDispatch();

  console.log(counterSlice);
  return (
    <div>
      <h3>Using Redux</h3>
      <p>
        <strong>{message}</strong>
      </p>
      <hr />
      <button
        onClick={() => {
          // dispatch(counterSlice.actions.increment());
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <p>Counter : {counter}</p>
    </div>
  );
};
