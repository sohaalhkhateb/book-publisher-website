import './SignUp2.css'
import arrowImage from '../../../assets/images/icons/arrow-icon.png'
import arrowImagePrefix from '../../../assets/images/icons/arrow-icon-prefix.png'
import { useNavigate } from 'react-router';
import axios from 'axios'
import { useState } from 'react';
import InputFieldWithErrors from '../../../components/InputFieldWithErrors';

export function SignUp2() {
  const [publisherName, setPublisherName] = useState('');
  const [location, setLocation] = useState('');
  const [publisherNameError, setPublisherNameError] = useState('');
  const [locationError, setLocationError] = useState('');

  const navigate = useNavigate();


  const nextFunction = async () => {
    navigate('/twofa');
    const response = await axios.post('', {
      name: publisherName,
      location: locationInput
    })
    setPublisherName('');
    setLocationInput('');
    console.log(response);
  }
  function backFunction() {
    navigate('/signup');
  }
  return (
    <div className='sign-up-2-container'>
      <p className='sign-up-2-details'>please insert your publishing company's name and location</p>

      <InputFieldWithErrors
        name='publisher Name'
        type='text'
        value={publisherName}
        setValue={setPublisherName}
        error={publisherNameError}
      />
      <InputFieldWithErrors
        name='location'
        type='text'
        value={location}
        setValue={setLocation}
        error={locationError}
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
  )
}