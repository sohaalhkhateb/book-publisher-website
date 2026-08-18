import { useEffect, useState } from 'react'

import api from '../../lib/axios'
import { useNavigate } from 'react-router'
import { InputList } from '../../components/InputList'
import InputFieldWithErrors from '../../components/InputFieldWithErrors'
import { Button } from '../../components/Button'
import { Header } from '../layout/Header'
import { NarrowView } from '../../components/NarrowView'

export function Sales() {
  const navigate = useNavigate()

  const [unit, setUnit] = useState(undefined)
  const [quantity, setQuantity] = useState(undefined)

  const [orders, setOrders] = useState([])
  const [sum, setSum] = useState(0)
  const [count, setCount] = useState(0)

  const [errors, setErrors] = useState({})

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    async function fetchOrders() {
      setLoading(true)
      try {
        const response = await api.post('/sales', { unit, quantity })
        setOrders(response.data.orders)
        setSum(response.data.sum)
        setCount(response.data.count)

      } catch (error) {
        setErrors(error.response.data)
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [unit, quantity])



  if (loading)
    return (
      <>
        <Header />
        <NarrowView>
          <p>loading ...</p>
        </NarrowView>
      </>
    )
  else
    return (
      <>
        <Header />
        <NarrowView>

          <InputFieldWithErrors
            type='number'
            name='amount'
            value={quantity}
            setValue={setQuantity}
            error={errors.quantity}
            message='choose the duration: '
          />

          <InputList
            label='choose the unit of the duration'
            options={[
              { day: 'day' },
              { week: 'week' },
              { month: 'month' },
              { year: 'year' }
            ]}
            value={unit}
            setValue={setUnit}
          />
          <Button
            text='reset'
            onClick={() => { setCount(undefined); setQuantity(undefined); setErrors({}) }}
            isLoading={loading}
          />
          {errors?.unit}



          <p>total revenue: {sum}</p>
          <p>orders done: {count}</p>
            
            <h1>SALES</h1>
          {orders.map((order) => (
            <div
              key={order.id}
              onClick={() => navigate(`/orders/${order.id}`)}
            >

              {order?.final_price_in_cents && (
                <p>Final price: {order.final_price_in_cents}</p>
              )}

              {order?.arrival_date && (
                <p>Arrival date: {order.arrival_date}</p>
              )}

              {order?.items && (
                <p>Number of items: {order.items.length}</p>
              )}

              {order?.email && (
                <p>Email: {order.email}</p>
              )}

              {order?.phone_number && (
                <p>Phone number: {order.phone_number}</p>
              )}

              {order?.address && (
                <p>Address: {order.address}</p>
              )}

              {order?.contacts && (
                <p>Contacts: {order.contacts}</p>
              )}
              <hr />
            </div>
          ))}
        </NarrowView>
      </>
    )
}