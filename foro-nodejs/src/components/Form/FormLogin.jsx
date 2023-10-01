import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/action/action';

import { Button, Checkbox, Input } from '@material-tailwind/react';

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
            <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto">
                <div className='my-5'>


                    <Input label='Username' value={userLogin.username} onChange={handleEmailChange} />
                </div>
                <div className='my-5'>

                    <Input label='Password' value={userLogin.password} onChange={handlePasswordChange} type="password" />
                </div>
                <div className="text-red-500 my-2">
                    {error}
                </div>
                <div className='flex items-center'>
                    <Checkbox /><p>Accept privacy policy</p>
                </div>
                <div className='flex flex-col  justify-center align-items '>
                    <Button type="submit" >Log In</Button>

                    <Link to="/register" className='my-3'>
                        <button>Don't have an account?</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default FormLogin;
