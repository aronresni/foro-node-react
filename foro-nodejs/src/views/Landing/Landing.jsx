import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBarLanding from './NavBarLanding';
import { Typography } from "@material-tailwind/react";

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
            <NavBarLanding />
            <div>
                <div className='mx-5 my-5 mt-10'>

                    <Typography variant="h1">Material Tailwind</Typography>
                </div>
                <div className='mx-10 my-5'>

                    <Typography variant="lead">
                        Material Tailwind is an easy to use components library for Tailwind CSS
                        and Material Design.
                    </Typography>

                    <Typography variant="paragraph">
                        Material Tailwind is an easy to use components library for Tailwind CSS
                        and Material Design.
                    </Typography>
                </div>

            </div>
        </div>
    );
};

export default Landing;
