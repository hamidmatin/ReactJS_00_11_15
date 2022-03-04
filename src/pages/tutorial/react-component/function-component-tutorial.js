import React from "react";
import {
  FunctionCompnent1,
  FunctionCompnent2,
  FunctionCompnent3,
} from "./function-component";

export const FucntionComponentTutorial = () => {
  return (
    <>
      {/* {FunctionCompnent1()} */}
      <FunctionCompnent1 />

      <FunctionCompnent2
        title="Hello React Function Component"
        message="By Props"
      />

      <FunctionCompnent2
        title="Hello React Function Component"
        message="Use Children"
      >
        <p>This Paragraph created in content</p>
      </FunctionCompnent2>

      <FunctionCompnent3
        title="Hello React Function Component"
        message={"define props"}
      >
        <p>This Paragraph created in content</p>
      </FunctionCompnent3>
    </>
  );
};
