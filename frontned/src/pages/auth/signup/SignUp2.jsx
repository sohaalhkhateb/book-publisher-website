import './SignUp2.css'
import arrowImage from '../../../assets/images/icons/arrow-icon.png'
import arrowImagePrefix from '../../../assets/images/icons/arrow-icon-prefix.png'
import { useNavigate } from 'react-router';
import axios from 'axios'
import { useState } from 'react';

export function SignUp2() {
  const [publisherName , setPublisherName] = useState('');
  const [locationInput , setLocationInput] = useState('');
  const navigate = useNavigate();
  const savePublisherName = (event) => {
    setPublisherName(event.target.value);
  }
  const saveLocationInput = (event) => {
    setLocationInput(event.target.value);
  }
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
      <p className='sign-up-2-details'>give us additional infornation about your conmpany!</p>
      <input
        type="text"
        placeholder='Publishe Name'
        className='login-input'
        value={publisherName}
        onChange={savePublisherName}
      />
      <input
        type="text"
        placeholder='Location'
        className='login-input'
        value={locationInput}
        onChange={saveLocationInput}
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