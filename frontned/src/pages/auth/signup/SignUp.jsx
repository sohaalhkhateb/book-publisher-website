import rightArrow from '../../../assets/images/icons/rightArrow.png'
import leftArrow from '../../../assets/images/icons/leftArrow.png'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Button } from '../../../components/Button';
import api from '../../../lib/axios';
import InputFieldWithErrors from '../../../components/InputFieldWithErrors';
import './SignUp.css'

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
          <Button
            position='left'
            text='back'
            onClickBtn={() => navigate('/login')}
            image={leftArrow}
          />
          <Button
            position='right'
            text='next'
            isLoading={isLoading}
            image={rightArrow}
            onClickBtn={nextFunction}
          />
        </div>
      </div>

    </>
  )
}