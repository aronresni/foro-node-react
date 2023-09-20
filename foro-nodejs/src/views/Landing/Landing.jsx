import React from 'react'
import { Link } from "react-router-dom"
const Landing = () => {
    return (
        <div>
            <Link to="/register">
                <button>Register</button>
            </Link>
            <Link to="/login">
                <button>Login</button>

            </Link>
        </div>
    )
}

export default Landing
