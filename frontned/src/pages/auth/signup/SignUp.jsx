import './SignUp.css'
import arrowImage from '../../../assets/images/icons/arrow-icon.png'
import arrowImagePrefix from '../../../assets/images/icons/arrow-icon-prefix.png'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios'

export function SignUp() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPwInput, setConfirmPwInput] = useState('');
  const navigate = useNavigate();
  const saveEmailInput = (event) => {
    setEmailInput(event.target.value);
  }
  const savePasswordInput = (event) => {
    setPasswordInput(event.target.value);
  }
  const saveConfirmPwInput = (event) => {
    setConfirmPwInput(event.target.value);
  }
  const nextFunction = async () => {
    navigate('/signup2');
    const response = await axios.post('', {
      email: emailInput,
      password: passwordInput,
      confirmPassword: confirmPwInput
    })
    setEmailInput('');
    setPasswordInput('');
    setConfirmPwInput('');
    console.log(response);
  }
  function backFunction() {
    navigate('/login');
  }
  return (
    <>
      <div className='sign-up-container'>
        <p className='sign-up-title'>Create Your Account</p>
        <input
          type="email"
          placeholder='enter your email'
          className='login-input'
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
        <input
          type="password"
          placeholder='confirm password'
          className='login-input'
          value={confirmPwInput}
          onChange={saveConfirmPwInput}
        />
        <div className='buttons-container'>
          <button
            className='sign-up-button'
            onClick={backFunction}
          >
            <p className='next-text-button'>back</p>
            <img src={arrowImagePrefix}
              className='sign-up-arrow-image'
              alt=''
            />
          </button>
          <button
            className='sign-up-button'
            onClick={nextFunction}
          >
            <p className='next-text-button'>next</p>
            <img src={arrowImage}
              className='sign-up-arrow-image'
              alt=''
            />
          </button>
        </div>
      </div>

    </>
  )
}