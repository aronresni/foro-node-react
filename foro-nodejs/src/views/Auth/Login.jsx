import React from 'react'
import FormLogin from '../../components/Form/FormLogin'
import NavBarLanding from '../Landing/NavBarLanding'

const Login = () => {
    return (
        <div>
            <NavBarLanding />
            <div className=' flex h-screen'>
                <div className='bg-black w-1/2'>
                </div>
                <div className="w-1/2  flex items-center justify-center">
                    <FormLogin />
                </div>
            </div>
        </div>
    )
}

export default Login
