import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { BasePage } from '../../components/base-page'
import { BASE_URL } from '../../utils/constants';
import { UserForm } from './user-form'

export const UserEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null)

  useEffect(()=>{
    axios.get(`${BASE_URL}/users/${id}`)
      .then(result => {
        setUserInfo(result.data)
      })
  }, [id])

  const updateUser = (user) => {
    console.log(user)
    axios
      .put(`${BASE_URL}/users/${id}`, user)
      .then(result=> {
        console.log(result)
        navigate('/users')
      })
  }
  return (
    <BasePage title={'Edit User'}>
      <UserForm user={userInfo} onSave={updateUser}/>
    </BasePage>
  )
}
