import rightArrow from '../../../assets/images/icons/rightArrow.png'
import skipImage from '../../../assets/images/icons/skip.png'
import InputFieldWithErrors from '../../../components/InputFieldWithErrors';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router';
import { OptionsComponent } from './OptionsComponent';
import { useState } from 'react';
import api from '../../../lib/axios';
import './TwoFA.css'

export function TwoFA({ internationalIds }) {

  const [prefixNumber, setPrefixNumber] = useState(internationalIds[0].number);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const nextFunction = async () => {
    try {
      setIsLoading(true)
      const response = await api.post('/saveNumber', {
        countryCode: prefixNumber,
        phoneNumber: phoneNumber
      })
      setIsLoading(false)
      if (response.data.redirect)
        navigate(`/${response.data.redirect}`)
      if (response.data.success)
        navigate('/signup/3')
      
    } catch (error) {
      setErrors(error.response.data);
      if (error.response.status == 419) {
        setErrors({ 'phoneNumber': 'session Expired' })
      }
      setIsLoading(false)
    }
  }

  function changePrefixNumber(event) {
    setPrefixNumber(event.target.value);
  }

  return (
    <div className='two-fa-container'>
      <p className='two-fa-title'>
        enable two-factor authentication for better security
      </p>
      <div className='sign-up-phone-section'>
        <select
          name="phone"
          id=""
          className='prefix-number'
          onChange={changePrefixNumber}
        >
          <OptionsComponent internationalIds={internationalIds} />
        </select>
        <InputFieldWithErrors
          name='phone number'
          type='text'
          value={phoneNumber}
          setValue={setPhoneNumber}
          error={errors.phoneNumber}
        />
      </div>
      <div className='buttons-container'>
        <Button
          position='left'
          text='skip'
          onClickBtn={() => navigate('/')}
          image={skipImage}
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
  )
}