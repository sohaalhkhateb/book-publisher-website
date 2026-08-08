import InputFieldWithErrors from '../../../components/InputFieldWithErrors';
import { Button } from '../../../components/Button';
import rightArrow from '../../../assets/images/icons/rightArrow.png'
import { Link } from 'react-router'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import './Login.css'
import api from '../../../lib/axios';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();


  const nextFunction = async () => {
    setIsLoading(true)
    api.post('/login', {
      email: email,
      password: password
    }).then((response) => {
      if (response.data.success)
        navigate('/')
    }).catch((error) => {
      setErrors(error.response.data)
      setIsLoading(false)
    })
  }


  return (
    <div className='login-body-section'>
      <p className='login-title'>Welcome to WebName</p>
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
      <div className='another-way-auth-section'>
        <p className='question-paragraph'>don't have an account ?</p>
        <Link to="/signup" className='sign-up-link'>
          SignUp
        </Link>
      </div>
      <Button
        position='right'
        text='next'
        isLoading={isLoading}
        image={rightArrow}
        onClick={nextFunction}
      />
    </div>
  )
}