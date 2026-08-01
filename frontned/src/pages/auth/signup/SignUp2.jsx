import rightArrow from '../../../assets/images/icons/rightArrow.png'
import leftArrow from '../../../assets/images/icons/leftArrow.png'
import { useNavigate } from 'react-router';
import api from '../../../lib/axios'
import { useState } from 'react'; 
import InputFieldWithErrors from '../../../components/InputFieldWithErrors';
import { Button } from '../../../components/Button';
import './SignUp2.css'


export function SignUp2() {
  
  const [publisherName, setPublisherName] = useState('');
  const [location, setLocation] = useState('');
  const [publisherNameError, setPublisherNameError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  

  


  const nextFunction = async () => {
    setIsLoading(true)
    api.post('/register2', {
      publisher_name: publisherName,
      location: location
    })
      .then(function (response) {
        if (response.data.success) {
          navigate('/twofa')
          setIsLoading(false)
        };
      })
      .catch(function (error) {
        setLocationError(error.response.data['location'])
        setPublisherNameError(error.response.data['publisher_name'])
        setIsLoading(false)
      });

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
        <Button
          position='left'
          text='back'
          onClickBtn={() => navigate('/login')}
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