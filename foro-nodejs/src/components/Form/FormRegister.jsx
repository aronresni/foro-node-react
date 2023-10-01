import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Checkbox, Input } from '@material-tailwind/react';

const FormRegister = () => {
  const navigate = useNavigate();
  const checkToken = sessionStorage.getItem('token');
  const [error, setError] = useState(null);
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [userRegister, setUserRegister] = useState({
    email: '',
    username: '',
    password: '',
    repeatPassword: '',
  });

  useEffect(() => {
    if (checkToken !== null) {
      navigate('/home');
    }
  }, [checkToken]);

  useEffect(() => {
    if (userRegister.password !== userRegister.repeatPassword) {
      setPasswordMatchError('Las contraseñas no coinciden.');
    } else {
      setPasswordMatchError('');
    }
  }, [userRegister.password, userRegister.repeatPassword]);

  const handleEmailChange = (e) => {
    setUserRegister({
      ...userRegister,
      email: e.target.value,
    });
  };

  const handleUsernameChange = (e) => {
    setUserRegister({
      ...userRegister,
      username: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setUserRegister({
      ...userRegister,
      password: e.target.value,
    });
  };

  const handleRepeatPasswordChange = (e) => {
    setUserRegister({
      ...userRegister,
      repeatPassword: e.target.value,
    });
  };

  // En el front-end
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/Users/signup', userRegister);
      navigate('/login');
    } catch (error) {
      setError('Error al registrar el usuario. Verifica tus credenciales.');
    }
  };

  return (
    <div>
      <form onSubmit={handleRegisterSubmit}>
        <div>
          <Input label="Email" value={userRegister.email} onChange={handleEmailChange} />
        </div>
        <div className="my-5">
          <Input label="Username" value={userRegister.username} onChange={handleUsernameChange} />
        </div>
        <Input label="Password" value={userRegister.password} onChange={handlePasswordChange} type="password" />
        <div className="my-5">
          <Input label="Repeat password" value={userRegister.repeatPassword} onChange={handleRepeatPasswordChange} type="password" />
        </div>
        <div className="text-red-500 my-2">
          {error}
        </div>
        {passwordMatchError && (
          <div className="text-red-500 my-2">
            {passwordMatchError}
          </div>
        )}
        <div className="flex items-center">
          <Checkbox /><p>Accept privacy policy</p>
        </div>
        <div className="flex flex-col justify-center align-items">
          <Button type="submit">Register</Button>
          <Link to="/login" className="my-3">
            <button>Already have an account?</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
