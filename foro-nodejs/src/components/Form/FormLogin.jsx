import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import {login} from "../../redux/action/action"
const FormLogin = () => {
    const dispatch = useDispatch()
    const checkToken = sessionStorage.getItem('token');
    const [token, setToken] = useState(null);
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })
    useEffect(() => {
        if (checkToken !== null) {
            navigate('/home');
        }
    }, [checkToken]);

    const handleEmailChange = (e) => {
        setUserLogin({
            ...userLogin,
            username: e.target.value
        })
    }

    const handlePasswordChange = (e) => {
        setUserLogin({
            ...userLogin,
            password: e.target.value
        })
    }
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const { response, user } = await dispatch(login(userLogin));
           sessionStorage.setItem("token", response.data.token);
            setToken(response.data.token);
            console.log("Usuario:", user);
           navigate("/home");
        } catch (error) {
            console.error("Error de inicio de sesión:", error);
        }
    };


    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <label>
                    username:
                        <input value={userLogin.username} onChange={handleEmailChange} />
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
