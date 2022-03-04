import React from "react";
import { ClassComponent1, ClassComponent2 } from "./class-component";

export const ClassComponentTutorial = () => {
  return (
    <>
      <ClassComponent1 />

      <ClassComponent2 title='Hello React Class Component' message='By Props' />

      <ClassComponent2
        title='Hello React Class Component'
        message='Use Children'
      >
        <p>This Paragraph created in content</p>
      </ClassComponent2>
    </>
  );
};
