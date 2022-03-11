import React from "react";
import { Link } from "react-router-dom";

export const UserCard = ({id, name, username, email, phone}) => {
  return (
    <div className='users-card'>
      <h3 className='user-title'>{name}</h3>
      <div className='user-text'>User Name : {username}</div>
      <div className='user-text'>E-Mail : {email}</div>
      <div className='user-text'>Phone : {phone}</div>
      <Link to={id.toString()}>View Information</Link>
    </div>
  );
};
