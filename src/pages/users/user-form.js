import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './user-form.css';

export const UserForm = ({ user, onSave }) => {
  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (user) {
      setUserInfo(user);
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    /* Validation */

    onSave(userInfo);
    /* Create New or Update */
  };

  // const onFirstNameChangeHandler = (e) => {
  //   setUserInfo({
  //     ...userInfo,
  //     firstName: e.target.value
  //   })
  // };

  // const onLastNameChangeHandler = (e) => {
  //   setUserInfo({
  //     ...userInfo,
  //     lastName: e.target.value
  //   })
  // };

  const onChangeHandler = (e) => {
    // console.log(e.target)
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={submitHandler} className='user-form'>
      <label htmlFor='first-name' className='label-control'>
        First Name
      </label>
      <input
        type='text'
        name='firstName'
        id='first-name'
        className='input-control'
        value={userInfo.firstName}
        onChange={onChangeHandler}
      />

      <label htmlFor='last-name' className='label-control'>
        Last Name
      </label>
      <input
        type='text'
        name='lastName'
        id='last-name'
        className='input-control'
        value={userInfo.lastName}
        onChange={onChangeHandler}
      />

      <label htmlFor='email' className='label-control'>
        E-Mail
      </label>
      <input
        type='text'
        name='email'
        id='email'
        className='input-control'
        value={userInfo.email}
        onChange={onChangeHandler}
      />

      <label htmlFor='phone' className='label-control'>
        Phone
      </label>
      <input
        type='text'
        name='phone'
        id='phone'
        className='input-control'
        value={userInfo.phone}
        onChange={onChangeHandler}
      />

      <div className='form-footer'>
        <button type='submit' className='icon-button' onClick={()=>{
          // navigate('path')
          // navigate(number)  positive => forward, negative => backward
          
          // navigate(-1)
          navigate('/users')

        }}>
          <i className='material-icons'>close</i>
        </button>
        <button type='submit' className=' icon-button'>
          <i className='material-icons'>save</i>
        </button>
      </div>
    </form>
  );
};
