import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar'
import defaultProfileImage from "../../assets/profile.jpg"
import { Button, Checkbox, Input, Avatar, Typography } from '@material-tailwind/react';
const NavBar = () => {
    const user = useSelector(state => state.userstate)

    return (
        <nav className='flex justify-between items-center my-5'>
            <div className='justify-start mx-9 my-5'>
                <h1 className='font-bold text-4xl'>ForoFr.</h1>
            </div>
            <SearchBar />

            <div className='flex justify-end mx-12'>
                <div className="flex items-center gap-4">
                 
                    <Link to="/user">

                        <Avatar src={defaultProfileImage} alt="avatar" />
                    </Link>
                    <div>
                        <Link to="/user">
                            <Typography variant="h6">{user.username}</Typography>
                         </Link>
                            <Typography variant="small" color="gray" className="font-normal">
                                Web Developer
                            </Typography>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default NavBar
