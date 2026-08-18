import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Button } from "../../components/Button";
import { useState } from "react";
import upwardsArrow from '../../assets/images/icons/upwardsArrow.png'
import closeImage from '../../assets/images/icons/close.png'
import api from "../../lib/axios";
import {  useNavigate } from "react-router";
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
      <h2>finalize your order</h2>

      <p>{error.message}</p>

      <InputFieldWithErrors
        type='text'
        name='notes'
        value={notes}
        setValue={setNotes}
        error={error.notes}
        required={false}
      />




      <InputList
        label='choose payment method'
        options={[{'cash':'cash'}, {'paypal':'paypal'}, {'visa':'visa'}, {'master card':'master card'}]}
        value={payment}
        setValue={setPayment}
      />


      {error.payment && <p>{error.payment}</p>}


      <hr />


      <Button
        color='firebrick'
        text='go back'
        position="left"
        image={closeImage}
        onClick={() => navigate('/guestOrder/3')}
        isLoading={loading}
      />


      <Button
        color='darkgreen'
        text='finish'
        image={upwardsArrow}
        onClick={next}
        isLoading={loading}
      />
    </>
  )
}