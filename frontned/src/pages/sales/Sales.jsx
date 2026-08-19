import { useEffect, useState } from 'react'

import api from '../../lib/axios'
import { useNavigate } from 'react-router'
import { InputList } from '../../components/InputList'
import InputFieldWithErrors from '../../components/InputFieldWithErrors'
import { Button } from '../../components/Button'
import { Header } from '../layout/Header'
import { NarrowView } from '../../components/NarrowView'
import { SaleComponent } from '../../components/SaleComponent'
import { Card } from '../../components/Card'
import { MainMenu } from '../../components/MainMenu'

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
        <div className='content-container'>
          <NarrowView>
            <p
              style={{
                fontSize: 'clamp(20px, 2vw, 23px)',
                color: 'var(--warning)',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: 'max-content',
                marginTop: '100px'
              }}
            >loading ...</p>
          </NarrowView >
        </div>
        <MainMenu />
      </>
    )
  else
    return (
      <>
        <Header />
        <div className='content-container'>
          <NarrowView>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around'
                }}
              >
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
              </div>
              <div
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <Button
                  text='reset'
                  onClick={() => { setCount(undefined); setQuantity(undefined); setErrors({}) }}
                  isLoading={loading}
                />
              </div>
            </div>
            {errors?.unit}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Card
                number={sum}
                title='TOTAL REVENUE'
                color='var(--success)'
              />
              <Card
                number={count}
                title='ORDERS DONE'
                color='var(--success)'
                fontColor='var(--success)'
              />
            </div>

            <h1
              style={{
                fontSize: 'clamp(20px, 3vw, 35px)',
                color: 'var(--primary)'
              }}
            >•SALES:</h1>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: ' repeat(auto-fit, minmax(161px,1fr))',
                columnGap: '10px',
                rowGap: '10px',
                width: '100%',
                placeItems: 'center'
              }}
            >
              {orders.map((order) => (
                <SaleComponent
                  order={order}
                  key={order.id}
                />
              ))}
            </div>
          </NarrowView >
        </div>
        <MainMenu />
      </>
    )
}