import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Button } from "../../components/Button";
import { useState } from "react";
import upwardsArrow from '../../assets/images/icons/upwardsArrow.png'
import closeImage from '../../assets/images/icons/close.png'
import api from "../../lib/axios";
import { useNavigate } from "react-router";


export function Step2() {


  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');


  const [error, setError] = useState({});

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  async function next() {

    setLoading(true);
    setError({});
    await api.post('/orders?step=2', {
      email,
      contacts,
      phone_number: phoneNumber,
      address,
    }).then((response) => {
      if (response.data.success) {
        setLoading(false)
        navigate('/guestOrder/3')
      }
    }).catch((errors) => {
      setError(errors.response.data.errors ?? errors.response.data)
      setLoading(false)
    })
  }


  return (
    <>
      <h2>how can we contact you ?</h2>


      <InputFieldWithErrors
        type='email'
        name='email'
        value={email}
        setValue={setEmail}
        error={error.email}
        required={false}
      />

      <InputFieldWithErrors
        type='text'
        name='phone number'
        value={phoneNumber}
        setValue={setPhoneNumber}
        error={error.phone_number}
        required={false}
      />

      <InputFieldWithErrors
        type='text'
        name='address'
        value={address}
        setValue={setAddress}
        error={error.address}
        required={false}
      />

      <InputFieldWithErrors
        type='text'
        name='contacts'
        value={contacts}
        setValue={setContacts}
        error={error.contacts}
        required={false}
      />

      <hr/>

      <Button
        color='firebrick'
        text='cancel'
        position="left"
        image={closeImage}
        onClick={() => navigate('/guestOrder/1')}
        isLoading={loading}
      />
      <Button
        color='darkgreen'
        text='continue'
        image={upwardsArrow}
        onClick={next}
        isLoading={loading}
      />

    </>
  )
}