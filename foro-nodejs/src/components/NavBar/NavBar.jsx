import React from 'react'
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <div>
            <div>
                <img src='logo' />
            </div>
            <div>
                <h1>Searchbar</h1>
            </div>
            <div>
            <Link to="/">
                <h1>User</h1>
            </Link>
            </div>
        </div>
    )
}

export default NavBar
