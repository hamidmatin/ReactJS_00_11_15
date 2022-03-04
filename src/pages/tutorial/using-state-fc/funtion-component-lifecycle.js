import React, { useState, useEffect } from "react";

export const FucntionComponentLifecycle = ({ title }) => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  /**
   * useEffect
   */

  //   console.log(useEffect);

  /*
    useEffect(callback function, dependencies)

    useEffect(() => {
      mounting and after updating

      return () => {
        before updateing and unmounting
      }
    }, [states])
  */

  /* sample 1 */
  useEffect(() => {
    console.log("1. Mount and After Update for any state");
    return () => {
      console.log("1-1. Unmount and Before Update any state");
    };
  });
  
  return (
    <div>
      <h3>{title}</h3>
      <hr />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>Counter : {counter}</p>
    </div>
  );
};
