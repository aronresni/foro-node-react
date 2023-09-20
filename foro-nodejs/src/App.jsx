import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import SignUp from './views/Auth/SignUp'
import Login from './views/Auth/Login'
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>

  )
}

export default App
