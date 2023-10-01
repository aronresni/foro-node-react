import React from 'react'
import FormRegister from '../../components/Form/FormRegister'
import NavBarLanding from '../Landing/NavBarLanding'
const SignUp = () => {
    return (
        <div>
            <NavBarLanding />
            <div className=' flex h-screen'>
                <div className='bg-black w-1/2'>
                </div>
                <div className="w-1/2  flex items-center justify-center">
                    <FormRegister />
                </div>
            </div>
        </div>
    )
}

export default SignUp

