import React, { useState } from "react";
import { FucntionComponentLifecycle } from "./funtion-component-lifecycle";

export const StateInFunctionComponent = () => {
  /**
   * const [state, setState] = useState(init)
   *
   * {state}
   * setState(new value)
   */
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("Function Component Lifecycle")

  const toggleHandler = () => {
      setIsVisible(!isVisible)
  };

  const changeMessageHandler = () => {
    setMessage(message + ", New Message added" );
  };
  return (
    <div>
      <h2>State In Fucntion Components and Events</h2>
      <button onClick={toggleHandler}>Toggle</button>
      <button onClick={changeMessageHandler}>Change Message</button>
      <button onClick={()=>{console.clear()}}>Clear Console</button>
      {isVisible ? (
        <FucntionComponentLifecycle title={message} />
      ) : null}
    </div>
  );
};
