import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setShowLogin, loginUser } = useContext(AppContext); // Thêm loginUser vào context
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    
  // Test login
    if (email === 'admin@example.com' && password === 'admin123') {
      loginUser('admin'); // Gọi loginUser từ context để lưu thông tin đăng nhập
      navigate('/admin-dashboard');
    } else if (email === 'employee@example.com' && password === 'employee123') {
      loginUser('employee'); 
      navigate('/dashboard-employee'); 
    } else {
      alert('Thông tin đăng nhập không hợp lệ!');
    }
    
    setShowLogin(false); 
  };

  const handleClose = () => {
    setShowLogin(false);
    navigate('/'); 
  };

  return (
    <div className='login-container'>
      <form onSubmit={onSubmitHandler} className='login-form'>
        <button type='button' className='close-btn' onClick={handleClose}>×</button>
        <h1 className='login-title'>Đăng nhập</h1>
        
        <div className='input-group'>
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

        <button type='submit' className='submit-btn'>Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;