import rightArrow from '../../../assets/images/icons/rightArrow.png'
import leftArrow from '../../../assets/images/icons/leftArrow.png'
import InputFieldWithErrors from '../../../components/InputFieldWithErrors';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router';
import axios from 'axios'
import { OptionsComponent } from './OptionsComponent';
import { useState } from 'react';
import './TwoFA.css'
import api from '../../../lib/axios';

export function TwoFA({ internationalIds }) {

  const [prefixNumber, setPrefixNumber] = useState(internationalIds[0].number);
  const [phoneNumber, setPhoneNumber] = useState('');
  const[phoneNumberError, setPhoneNumberError] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
    
  const nextFunction = async () => {
    try {
      const response = await axios.post('/saveNumber', {
        countryCode :prefixNumber,
        phoneNumber:phoneNumber
      })
      if (response.data.success) {
        navigate('/twofacheck')
      }
    } catch (error) {
      setPhoneNumberError(error.response.data['phoneNumber']);

    }
    setPrefixNumber('');
    setPrefixNumber(internationalIds[0].number);
    console.log(response);
  }

  function changePrefixNumber(event) {
    setPrefixNumber(event.target.value);
  }

  return (
    <div className='two-fa-container'>
      <p className='two-fa-title'>
        2-FA
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
          type='number'
          value={phoneNumber}
          setValue={setPhoneNumber}
          error={phoneNumberError}
        />
      </div>
      <div className='buttons-container'>
        <Button
          position='left'
          text='back'
          onClickBtn={() => navigate('/signup2')}
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
  )
}