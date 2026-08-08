import leftArrow from '../../../assets/images/icons/leftArrow.png'
import rightArrow from '../../../assets/images/icons/rightArrow.png'
import resetImage from '../../../assets/images/icons/reset.png'
import { useNavigate } from 'react-router';
import InputFieldWithErrors from '../../../components/InputFieldWithErrors'
import { Button } from '../../../components/Button'
import { useEffect, useState } from 'react';
import api from '../../../lib/axios'
import './TwoFACheck.css'

export function TwoFaCheck() {

  const [actualCode, setActualCode] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCode = async () => {
      setLoading(true)
      const response = await api.get('/verificationCode');
      if (response.data.redirect)
        navigate(`/${response.data.redirect}`)
      setActualCode(response.data['code'])
      setLoading(false)
    }
    fetchCode();
  }, [refresh]);

  const nextFunction = async () => {
    try {
      const response = await api.post('/verificationCode', {
        code: code
      });
      if (response.data.success) {
        navigate('/')
      }
    } catch (errors) {
      setError(errors.response.data)
      console.log(error)
    }

  }


  return (
    <div className='tow-fa-check-container'>
      <p className='tow-fa-check-title'>
        Enter the code that was sent to your imaginary phone number
      </p>
      <p className='actualCode'>
        {loading ? 'loading' : `enter the code : ${actualCode}`}
      </p>

      <InputFieldWithErrors
        type="text"
        name='code'
        value={code}
        setValue={setCode}
        error={error.code}

      />

      <div className='buttons-container'>
        <Button
          position='left'
          text='resend'
          onClick={() => setRefresh(!refresh)}
          image={resetImage}
          isLoading={loading}
        />
        <Button
          position='left'
          text='back'
          onClick={() => navigate('/signup/2')}
          image={leftArrow}
        />
        <Button
          position='right'
          text='next'
          isLoading={loading}
          image={rightArrow}
          onClick={nextFunction}
        />
      </div>
    </div>
  )
}