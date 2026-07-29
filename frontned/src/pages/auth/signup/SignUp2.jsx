import rightArrow from '../../../assets/images/icons/rightArrow.png'
import leftArrow from '../../../assets/images/icons/leftArrow.png'
import { useNavigate } from 'react-router';
import api from '../../../lib/axios'
import { useEffect, useState } from 'react';
import InputFieldWithErrors from '../../../components/InputFieldWithErrors';
import { Button } from '../../../components/Button';
import './SignUp2.css'

export function SignUp2() {
  const [publisherName, setPublisherName] = useState('');
  const [location, setLocation] = useState('');
  const [publisherNameError, setPublisherNameError] = useState('');
  const [locationError, setLocationError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
     const verification = async () => {   
      const response = await api.get('/user')
      console.log(response.data)
      navigate(response.data.redirect)
    }
    verification();
  }
  ,[])

const nextFunction = async () => {

  api.post('/register2', {
    publisher_name: publisherName,
    location: location
  })
    .then(function (response) {
      if (response.data.success) {
        navigate('/twofa')
      };
    })
    .catch(function (error) {
      setLocationError(error.response.data['location'])
      setPublisherNameError(error.response.data['publisher_name'])

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
        onClickBtn={() => navigate('/signup')}
        image={leftArrow}
      />
      <Button
        position='right'
        text='next'
        onClickBtn={nextFunction}
        image={rightArrow}
      />
    </div>
  </div>
)
}