import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const FormRegister = () => {
    const navigate = useNavigate()
    const checkToken = sessionStorage.getItem('token');
    //const [errorMsg, setErrorMsg] = useState('');
    const [userRegister, setUserRegister] = useState({
        email: "",
        username: "",
        password: ""
    })
    useEffect(() => {
        if (checkToken !== null) {
            navigate('/home');
        }
    }, [checkToken]);

    const handleEmailChange = (e) => {
        setUserRegister({
            ...userRegister,
            email: e.target.value
        });
    }
    const handleUsernameChange = (e) => {
        setUserRegister({
            ...userRegister,
            username: e.target.value
        })
    }

    const handlePasswordChange = (e) => {
        setUserRegister({
            ...userRegister,
            password: e.target.value
        });
    }

    // En el front-end
    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/Users/signup", userRegister)

            navigate("/login")
        } catch (error) {

        }
    }


    return (
        <div>
            <form onSubmit={handleRegisterSubmit}>
                <div>
                    <label>
                        Email:
                        <input value={userRegister.email} onChange={handleEmailChange} />
                    </label>
                </div>  
                <div>
                    <label>
                        Username:
                        <input value={userRegister.username} onChange={handleUsernameChange} />
                    </label>
                </div>
                <div>   
                    <label>
                        Password:
                        <input value={userRegister.password} onChange={handlePasswordChange} type="password" />
                    </label>
                    <label>
                        Repeat Password:
                        <input value={userRegister.password} onChange={handlePasswordChange} type="password" />
                    </label>
                </div>
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    <button type="submit">Register</button>
                    <Link to="/login">
                        <button>Already have an account?</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default FormRegister
