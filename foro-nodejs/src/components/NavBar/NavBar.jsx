import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import logo from "../../assets/pngwind.png"
import defaultProfileImage from "../../assets/profile.jpg"
const NavBar = () => {
    const user = useSelector(state => state.userstate)
    
    return (
   <nav>
    PUTO EL QUE LEE
   </nav>
    )
}

export default NavBar
