import { Link, useNavigate } from 'react-router'
import { useState } from 'react';
import api from '../../../lib/axios'
import InputFieldWithErrors from '../../../components/InputFieldWithErrors'
import './Login.css'



export function Login({ setUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();


  async function goFunction() {
    try {
      await api.get('/sanctum/csrf-cookie')
      const response = await api.post('/login', {
        email,
        password,
      })

      if (response.data.redirect) {
        setUser(response.data.user)
        navigate('/')
      }
    } catch (error) {
      setErrors(error.response?.data?.message ?? error.message)
    }
  }


  return (
    <div className='login-body-section'>
      <p className='login-title'>Welcome to WebName</p>

      <InputFieldWithErrors
        type="email"
        name='email'
        value={email}
        setValue={setEmail}
      />

      <InputFieldWithErrors
        type='password'
        name='password'
        value={password}
        setValue={setPassword}
      />
      <p>{errors}</p>

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