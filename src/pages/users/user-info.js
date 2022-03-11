import React from "react";
import { useParams } from "react-router-dom";
export const UserInfoIndex = () => {
  // console.log(useParams())
  const { id } = useParams();

  return <div>UserInfoIndex</div>;
};
