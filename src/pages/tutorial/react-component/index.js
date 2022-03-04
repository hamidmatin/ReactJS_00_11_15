import React from "react";
import { ClassComponentTutorial } from "./class-component-tutorial";
import { FucntionComponentTutorial } from "./function-component-tutorial";

export const ReactComponentIndex = () => {
  return (
    <div>
      <FucntionComponentTutorial />
      <hr />
      <ClassComponentTutorial />
    </div>
  );
};
