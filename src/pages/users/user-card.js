import React from 'react';
import { Link } from 'react-router-dom';

export const UserCard = ({ id, firstName, lastName, username, email, phone }) => {
  return (
    <div className='users-card'>
      <h3 className='user-title'>
        {firstName} {lastName}
      </h3>
      <div className='user-text'>ID : {id}</div>
      <div className='user-text'>User Name : {username}</div>
      <div className='user-text'>E-Mail : {email}</div>
      <div className='user-text'>Phone : {phone}</div>
      <div className='user-card-footer'>
        <Link to={`edit/${id}`} className='icon-button'>
          <i className='material-icons'>edit</i>
        </Link>
        <button className='icon-button'>
          <i className='material-icons'>delete</i>
        </button>
      </div>
    </div>
  );
};
