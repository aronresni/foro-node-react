import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Post from '../../components/Posts/Post'
import CreatePost from "../../components/Posts/CreatePost"
import { getUsers, getPost } from '../../redux/action/action'


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
      <CreatePost />
      <Post />
    </div>
  )
}

export default Home
