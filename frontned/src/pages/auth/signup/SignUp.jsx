import './SignUp.css'
import arrowImage from '../../../assets/images/icons/arrow-icon.png'
import arrowImagePrefix from '../../../assets/images/icons/arrow-icon-prefix.png'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import api from '../../../lib/axios';


export function SignUp() {

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPwInput, setConfirmPwInput] = useState('');

  const navigate = useNavigate();

  const nextFunction = async () => {
    await api.get('sanctum/csrf-cookie')
    await api.post('register', {
      email: emailInput,
      password: passwordInput,
      password_confirmation: confirmPwInput
    }).then(
      response => console.log(response.data)

    ).catch(
      errors => console.log(errors.response.data)
    )
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
          onChange={event => setEmailInput(event.target.value)}
        />
        <input
          type="password"
          placeholder='enter your password'
          className='login-input'
          value={passwordInput}
          onChange={event => setPasswordInput(event.target.value)}
        />
        <input
          type="password"
          placeholder='confirm password'
          className='login-input'
          value={confirmPwInput}
          onChange={event => setConfirmPwInput(event.target.value)}
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