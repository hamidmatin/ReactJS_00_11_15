import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../utils/constants';
export const UserInfoIndex = () => {
  // console.log(useParams())
  const { id } = useParams();

  const [userInfo, setUserInfo] = useState(null)

  useEffect(()=>{
    axios.get(`${BASE_URL}/users/${id}`)
      .then(result => {
        // console.log(result)
        setUserInfo(result.data)
      })
  }, [id])
  return <div>UserInfoIndex <strong>{id}</strong></div>;
};
