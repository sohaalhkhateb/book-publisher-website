import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Button } from "../../components/Button";
import { useState } from "react";
import check from '../../assets/images/icons/check.png'
import backImage from '../../assets/images/icons/back.png'
import api from "../../lib/axios";
import { useNavigate } from "react-router";
import { InputList } from '../../components/InputList'

export function Step7() {


  const [notes, setNotes] = useState('');
  const [payment, setPayment] = useState('');
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  async function next() {

    setLoading(true);
    setError({});


    await api.post('/orders?step=6', {
      notes,
      payment,
    }).then((response) => {
      if (response.data.success) {
        setLoading(false)
        navigate('/guestOrder/success')
      }
    }).catch((errors) => {
      setError(errors.response.data.errors ?? errors.response.data)
      setLoading(false)
    })
  }


  return (
    <>
      <h2
        style={{
          fontSize: 'clamp(20px, 2vw, 35px)',
          color: 'var(--primary)'
        }}
      >•finalize your order :</h2>
      <p
        style={{
          fontSize: 'clamp(20px, 2vw, 23px)',
          color: 'var(--error)',
        }}
      >{error.message}</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <InputFieldWithErrors
          type='text'
          name='notes'
          value={notes}
          setValue={setNotes}
          error={error.notes}
          required={false}
        />
        <div>
          <InputList
            label='•choose payment method :'
            options={[{ 'cash': 'cash' }, { 'paypal': 'paypal' }, { 'visa': 'visa' }, { 'master card': 'master card' }]}
            value={payment}
            setValue={setPayment}
          />{error.payment && <p
            style={{
              fontSize: 'clamp(20px, 2vw, 23px)',
              color: 'var(--error)',
            }}
          >{error.payment}</p>}
        </div>
      </div>




      <br />
      <br />
      <hr />
      <br />
      <br />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Button
          color='firebrick'
          text='go back'
          position="left"
          image={backImage}
          onClick={() => navigate('/guestOrder/3')}
          isLoading={loading}
        />
        <Button
          color='darkgreen'
          text='finish'
          image={check}
          onClick={next}
          isLoading={loading}
        />
      </div>
    </>
  )
}