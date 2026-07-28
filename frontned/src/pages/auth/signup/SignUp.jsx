import './SignUp.css'
import arrowImage from '../../../assets/images/icons/arrow-icon.png'
import arrowImagePrefix from '../../../assets/images/icons/arrow-icon-prefix.png'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import api from '../../../lib/axios';
import InputFieldWithErrors from '../../../components/InputFieldWithErrors';

export function SignUp({ setUser }) {



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const nextFunction = async () => {
    setIsLoading(true);
    await api.get('sanctum/csrf-cookie')
    await api.post('register', {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }).then(
      (response) => {
        if (response.data.success) {
          setIsLoading(false)
          setUser(response.data.user)
          navigate('/signup2')
        }
      }
    ).catch(
      (error) => {
          setIsLoading(false)
          setNameError(error.response.data['name'])
          setEmailError(error.response.data['email'])
          setPasswordError(error.response.data['password'])
        }
    )
  }

  function backFunction() {
    navigate('/login');
  }


  return (
    <>
      <div className='sign-up-container'>
        <p className='sign-up-title'>Create Your Account</p>

        <InputFieldWithErrors
          type="text"
          name='name'
          value={name}
          setValue={setName}
          error={nameError}
        />
        <InputFieldWithErrors
          type="email"
          name="email"
          value={email}
          setValue={setEmail}
          error={emailError}
        />
        <InputFieldWithErrors
          type="password"
          name="password"
          value={password}
          setValue={setPassword}
          error={passwordError}
        />
        <InputFieldWithErrors
          type="password"
          name="password_confirmation"
          value={passwordConfirmation}
          setValue={setPasswordConfirmation}
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
            <p className='next-text-button'>
              {isLoading ? 'loading..' : 'next'}
            </p>
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