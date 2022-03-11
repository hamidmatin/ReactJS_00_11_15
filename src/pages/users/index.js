import React, { useState, useEffect } from "react";
import { UserCard } from "./user-card";
import axios from "axios";

import "./users.css";

export const UsersIndex = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        setUserList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <h2>Users</h2>
      {userList.length !== 0 ? (
        <div className='row'>
          {userList.map((user) => (
            <div key={user.id} className='col-sm-6 col-md-4'>
              <UserCard
                id={user.id}
                name={user.name}
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
    </section>
  );
};
