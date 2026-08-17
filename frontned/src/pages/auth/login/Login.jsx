import InputFieldWithErrors from '../../../components/InputFieldWithErrors';
import { Button } from '../../../components/Button';
import rightArrow from '../../../assets/images/icons/rightArrow.png'
import { Link } from 'react-router'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { InfoCard } from '../../../components/InfoCard'
import { Card } from '../../../components/Card'
import './Login.css'
import api from '../../../lib/axios';
import office from '../../../assets/images/icons/office.png'
import admin from '../../../assets/images/icons/admin.png'

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();


  const nextFunction = async () => {
    setIsLoading(true)
    api.post('/login', {
      email: email,
      password: password
    }).then((response) => {
      if (response.data.success)
        setIsLoading(false)
      navigate('/')
    }).catch((error) => {
      setErrors(error.response.data)
      setIsLoading(false)
    })
  }


  return (
    <div className='login-body-section'>
      <p className='login-title'>Welcome to the Publishing House Website</p>
      {
        !isAdmin ?
          <>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: '20px'
            }}>
              <p className='question-login'>
                What would you like to do ?
              </p>
              <Card
                subTitle='I want to use Publishing House services'
                src={office}
                width={40}
                bgColor='var(--primary)'
                fontColor='var(--surface)'
                onClick={() => navigate('/orders/add/1')}
              />
              <Card
                subTitle='I want to login as an Admin'
                src={admin}
                width={40}
                bgColor='var(--primary)'
                fontColor='var(--surface)'
                onClick={() => setIsAdmin(true)}
              />
            </div>
          </>
          :
          <>
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
          </>
      }

    </div>
  )
}