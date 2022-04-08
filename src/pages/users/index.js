import React, { useState, useEffect } from 'react';
import { UserCard } from './user-card';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

import './users.css';
import { BasePage } from '../../components/base-page';
import { Link } from 'react-router-dom';

export const UsersIndex = () => {
  const [allUsers, setAllUsers] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL + '/users')
      .then((response) => {
        console.log(response);
        setAllUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BasePage title={'Users'}>
      <div className='new-wrapper'>
        <Link to={`new`} className='icon-button'>
          <i className='material-icons'>person_add</i>
        </Link>
      </div>
      {allUsers && allUsers.users.length > 0 ? (
        <div className='row'>
          {allUsers.users.map((user) => (
            <div key={user.id} className='col-sm-6 col-md-4'>
              <UserCard
                id={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                username={user.username}
                phone={user.phone}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className='list-empty'>List is empty</p>
      )}
    </BasePage>
  );
};
