import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const checkToken = sessionStorage.getItem('token');

    useEffect(() => {
        if (checkToken !== null) {
            navigate('/home');
        }
    }, [checkToken]);

    return (
        <div>
            <Link to="/register">
                <button>Register</button>
            </Link>
            <Link to="/login">
                <button>Login</button>
            </Link>
        </div>
    );
};

export default Landing;
