import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../../state/userContextProvider';
import axios from 'axios';

const FormLogin = () => {
    const navigate = useNavigate();
    const { loginUser } = useContext(UserContext); // Accedes al contexto aquí
    const [userLogin, setUserLogin] = useState({
        username: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleEmailChange = (e) => {
        setUserLogin({
            ...userLogin,
            username: e.target.value,
        });
    };

    const handlePasswordChange = (e) => {
        setUserLogin({
            ...userLogin,
            password: e.target.value,
        });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(`http://localhost:3000/Users/login`, userLogin);
            const { data: { token, ...userData } } = response;
            loginUser(userData, token); // Usas la función loginUser del contexto
            sessionStorage.setItem('token', token);
            setLoading(false);
            navigate('/home');
        } catch (error) {
            setError('Error de inicio de sesión. Verifica tus credenciales.');
            setLoading(false);
        }
    };

    const checkToken = sessionStorage.getItem('token');

    useEffect(() => {
        if (checkToken !== null) {
            navigate('/home');
        }
    }, [checkToken, navigate]);

    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <label>
                        Username:
                        <input value={userLogin.username} onChange={handleEmailChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input value={userLogin.password} onChange={handlePasswordChange} type="password" />
                    </label>
                </div>
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    <button type="submit">Log In</button>
                    <Link to="/register">
                        <button>Don't have an account?</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default FormLogin;
