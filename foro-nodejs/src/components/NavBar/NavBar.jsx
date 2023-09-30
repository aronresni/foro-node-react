import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import logo from "../../assets/pngwind.png"
import defaultProfileImage from "../../assets/profile.jpg"
const NavBar = () => {
    const user = useSelector(state => state.userstate)

    return (
        <nav>
            <div className='flex justify-end'>

                <div className="flex items-center gap-4">
                    <Avatar src="/img/face-2.jpg" alt="avatar" />
                    <div>
                        <Typography variant="h6">Tania Andrew</Typography>
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
