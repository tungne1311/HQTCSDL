import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    setShowLogin(false);
  };

  const handleClose = () => {
    setShowLogin(false);
    navigate('/'); // Điều hướng về trang chủ
  };

  return (
    <div className='login-container'>
      <form onSubmit={onSubmitHandler} class='login-form'>
        <button type='button' class='close-btn' onClick={handleClose}>×</button>
        <h1 class='login-title'>Đăng nhập</h1>
        
        <div class='input-group'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            required
          />
        </div>
        
        <div className='input-group'>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
        </div>

        <button type='submit' class='submit-btn'>Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
