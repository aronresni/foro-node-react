import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getUsers, getPost, activeuser } from '../../redux/action/action'
import { useDispatch, useSelector } from "react-redux"
import { Post, NavBar, CreatePost } from "../../components/index"


const Home = () => {
  const dispatch = useDispatch()
  const token = sessionStorage.getItem(`token`)
  const username = sessionStorage.getItem(`username`)
  const navigate = useNavigate();
  const user = useSelector(state => state.userstate)
  console.log(user);

  useEffect(() => {

    if (token === null) navigate("/login")
    dispatch(getUsers())
    dispatch(getPost())
    dispatch(activeuser(username))
  }, [])


  return (
    <div>
      <NavBar />
      <CreatePost />
      <Post />
    </div>
  )
}

export default Home
