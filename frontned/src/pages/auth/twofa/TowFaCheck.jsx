import './TwoFACheck.css'
import arrowImage from '../../../assets/images/icons/arrow-icon.png'
import arrowImagePrefix from '../../../assets/images/icons/arrow-icon-prefix.png'
import { useNavigate } from 'react-router';
import axios from 'axios'
import { Link } from 'react-router';
import { useState } from 'react';
export function TwoFaCheck() {
  const [code, setCode ] = useState('');
  const navigate = useNavigate();

  const nextFunction = async () => {
    navigate('/');
    const response = await axios.post('', {
      code: code
    })
    setCode('');
    console.log(response);
  }
  function backFunction() {
    navigate('/twofa');
  }
  function saveCodeInput(evant){
    setCode(evant.target.value);
  }
 
  return (
    <div className='tow-fa-check-container'>
      <p className='tow-fa-check-title'>
        Enter the code that was sent to +963 *** *** *345
      </p>
      <input
        type="number"
        placeholder='enter code here'
        className='login-input'
        value={code}
        onChange={saveCodeInput}
      />
      <Link to='' className='tow-fa-ckeck-link'>
        resend
      </Link>
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