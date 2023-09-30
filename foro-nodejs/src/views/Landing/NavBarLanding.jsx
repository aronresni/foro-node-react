import React from 'react'
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const NavBarLanding = () => {
    return (
        <div className='flex justify-between border-2'>
            <div className='justify-start mx-9 my-5'>
                <h1 className='font-bold text-xl'>ForoFr.</h1>
            </div>
            <div className='flex justify-end space-x-10 mx-9 my-5'>
                <Link to="/login">
                    <Button variant="outlined">Log In</Button>
                </Link>
                <Link to="/register">
                    <Button variant="gradinet">Sign Up</Button>
                </Link>
            </div>
        </div>
    )
}

export default NavBarLanding
