import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Post from '../../components/Posts/Post'


const Home = () => {
  const token = sessionStorage.getItem(`token`)
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (token === null) {
      navigate('/login');
    }
  }, [location, navigate, token])


  return (

    <div>
      <Post />
    </div>
  )
}

export default Home
