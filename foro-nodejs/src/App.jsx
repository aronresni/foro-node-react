import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import { Landing, SignUp, Login, Home, UserPage } from "./views/index"
function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/user' element={<UserPage />} />
    </Routes>
  )
}

export default App
