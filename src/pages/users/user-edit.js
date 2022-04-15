import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { BasePage } from '../../components/base-page'
import { withLoading } from '../../HOC/with-loading';
import { BASE_URL } from '../../utils/constants';
import { UserForm } from './user-form'

export const UserEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  const BasePageWithLoading = withLoading(BasePage)

  useEffect(()=>{
    axios.get(`${BASE_URL}/users/${id}`)
      .then(result => {
        setUserInfo(result.data)
        setIsLoading(false)
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
    <BasePageWithLoading isLoading={isLoading} title={'Edit User'}>
      <UserForm user={userInfo} onSave={updateUser}/>
    </BasePageWithLoading>
  )
}
