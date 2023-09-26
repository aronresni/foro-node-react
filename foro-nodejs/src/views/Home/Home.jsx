import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Post from '../../components/Posts/Post'
import CreatePost from "../../components/Posts/CreatePost"
import { getUsers, getPost } from '../../redux/action/action'
import { useDispatch } from 'react-redux'


const Home = () => {
  dispatch = useDispatch()
  const token = sessionStorage.getItem(`token`)
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {

    if (token === null) {
      navigate('/login');
    }
    
    dispatch(getUsers())
    dispatch(getPost())


  }, [location, navigate, token])


  return (

    <div>
      <CreatePost />
      <Post />
    </div>
  )
}

export default Home
