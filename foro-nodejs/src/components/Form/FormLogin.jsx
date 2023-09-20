import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const FormLogin = () => {

    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    const handleEmailChange = (e) => {
        setUserLogin({
            ...userLogin,
            email: e.target.value
        })
    }

    const handlePasswordChange = (e) => {
        setUserLogin({
            ...userLogin,
            password: e.target.value
        })
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/Users/signup", userLogin)
            navigate("/home")
        } catch (error) {

        }
    }


    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <label>
                        Email:
                        <input value={userLogin.email} onChange={handleEmailChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input value={userLogin.password} onChange={handlePasswordChange} />
                    </label>
                </div>
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    <button type="submit">Log In</button>
                    <Link to="/register">
                        <button>Dont have an account?</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default FormLogin
