import './Login.css'
import { Link } from 'react-router'
import { useNavigate } from 'react-router';
import axios from 'axios'
import { useState } from 'react';

export function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();
  const saveEmailInput = (event) => {
    setEmailInput(event.target.value);
  }
  const savePasswordInput = (event) => {
    setPasswordInput(event.target.value);
  }
  const goFunction = async () => {
    navigate('/');
    const response = await axios.post('', {
      email: emailInput,
      password: passwordInput
    })
    setEmailInput('');
    setPasswordInput('');
    console.log(response);
  }
  return (
    <div className='login-body-section'>
      <p className='login-title'>Welcome to WebName</p>
      <input
        type="email"
        placeholder='enter your email'
        className='login-input email'
        value={emailInput}
        onChange={saveEmailInput}
      />
      <input
        type="password"
        placeholder='enter your password'
        className='login-input'
        value={passwordInput}
        onChange={savePasswordInput}
      />
      <div className='another-way-auth-section'>
        <p className='question-paragraph'>don't have an account ?</p>
        <Link to="/signup" className='sign-up-link'>
          SignUp
        </Link>
      </div>
      <button className='login-button'
        onClick={goFunction}
      >
        Login
      </button>
    </div>
  )
}