import './TwoFA.css'
import arrowImage from '../../../assets/images/icons/arrow-icon.png'
import arrowImagePrefix from '../../../assets/images/icons/arrow-icon-prefix.png'
import { useNavigate } from 'react-router';
import axios from 'axios'
import { OptionsComponent } from './OptionsComponent';
import { useState } from 'react';

export function TwoFA({ internationalIds }) {
  const [prefixNumber, setPrefixNumber] = useState(internationalIds[0].number);
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const nextFunction = async () => {
    navigate('/twofacheck');
    const response = await axios.post('', {
      phone: prefixNumber+phoneNumber
    })
    setPrefixNumber('');
    setPrefixNumber(internationalIds[0].number);
    console.log(response);
  }
  function backFunction() {
    navigate('/signup2');
  }
  function changePrefixNumber(event) {
    setPrefixNumber(event.target.value);
  }
  function savePhoneInput(event) {
    setPhoneNumber(event.target.value);
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
        <input
          type="number"
          placeholder='enter your phone'
          className='login-input'
          value={phoneNumber}
          onChange={savePhoneInput}
        />
      </div>
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
  )
}