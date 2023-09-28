import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, setUser } from '../../redux/action/action';

const FormLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        username: '',
        password: '',
    });

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
        try {
            const { response, user } = await dispatch(login(userLogin));
            sessionStorage.setItem('token', response.data.token);
            dispatch(setUser(user));

            navigate('/home');
        } catch (error) {
            console.error('Error de inicio de sesión:', error);
        }
    };
    const checkToken = sessionStorage.getItem('token');
    const user = useSelector((state) => state.user); 

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
            {user && (
                <div>
                    {/* Puedes mostrar información del usuario después de iniciar sesión */}
                    <p>Welcome, {user.name}!</p>
                </div>
            )}
        </div>
    );
};

export default FormLogin;
