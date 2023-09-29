import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/action/action';

const FormLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
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
            const { response, user } = await dispatch(login(userLogin));
            console.log(response.data);
            const token = response.data.token
            const username = response.data.login.username
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('username', username);
            navigate('/home');
        } catch (error) {
            setError('Error de inicio de sesión. Verifica tus credenciales.');
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
