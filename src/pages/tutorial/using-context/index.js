import React, { useState } from 'react';
import { changeMessage, updateMessage } from '../../../context/actions';
import { useMyContext } from '../../../context/my-context';

export const UsingContext = () => {
  console.log(useMyContext());
  const { myState, dispatch } = useMyContext();
  const [message, setMessage] = useState('');

  return (
    <div>
      <h3>Using Context</h3>
      <button
        onClick={() => {
          dispatch(changeMessage());
        }}
      >
        Change Message
      </button>
      <hr />
      <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} />
      <button
        onClick={() => {
          dispatch(updateMessage(message));
        }}
      >
        Update Message
      </button>
      <p>{myState.contextMessageTest}</p>
    </div>
  );
};
