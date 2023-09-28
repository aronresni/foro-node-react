import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getUsers, getPost } from '../../redux/action/action'
import { useDispatch } from "react-redux"
import { Post, NavBar, CreatePost } from "../../components/index"


const Home = () => {
  const dispatch = useDispatch()
  const token = sessionStorage.getItem(`token`)
  const location = useLocation();
  const navigate = useNavigate();
console.log(token);
  useEffect(() => {

    if (token === null) navigate("/login")
    dispatch(getUsers())
    dispatch(getPost())
  }, [location, navigate, token])


  return (
    <div>
      <NavBar />
      <CreatePost />
      <Post />
    </div>
  )
}

export default Home
