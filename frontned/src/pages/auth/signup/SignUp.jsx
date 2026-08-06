import rightArrow from '../../../assets/images/icons/rightArrow.png'
import leftArrow from '../../../assets/images/icons/leftArrow.png'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Button } from '../../../components/Button';
import api from '../../../lib/axios';
import InputFieldWithErrors from '../../../components/InputFieldWithErrors';
import './SignUp.css'

export function SignUp() {



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors,setErrors]= useState({});
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
          navigate('1')
        }
      }

    ).catch(
      (error) => {
        setIsLoading(false)
        setErrors(error.response.data)
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
          error={errors.name}
        />
        <InputFieldWithErrors
          type="email"
          name="email"
          value={email}
          setValue={setEmail}
          error={errors.email}
        />
        <InputFieldWithErrors
          type="password"
          name="password"
          value={password}
          setValue={setPassword}
          error={errors.password}
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