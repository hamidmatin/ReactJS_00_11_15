import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BasePage } from '../../components/base-page'
import { BASE_URL } from '../../utils/constants'
import { UserForm } from './user-form'

export const UserNew = () => {
  const navigate = useNavigate()
  const newUser = user => {
    console.log(user)
    axios
    .post(`${BASE_URL}/users/add`, user)
    .then(result=> {
      console.log(result)
      navigate('/users')
    })
  }
  return (
    <BasePage title={'New User'}>
      <UserForm onSave={newUser}/>
    </BasePage>
  )
}
