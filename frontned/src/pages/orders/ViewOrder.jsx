import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import api from '../../lib/axios';
import { Button } from '../../components/Button';
import { Header } from '../layout/Header';
import { NarrowView } from '../../components/NarrowView';
import checkImage from '../../assets/images/icons/check.png'
import downloadImage from '../../assets/images/icons/download.png'
import okImage from '../../assets/images/icons/ok.png'
import InputFieldWithErrors from '../../components/InputFieldWithErrors';
import { OrderComponent } from '../../components/OrderComponent';
import './ViewOrder.css'
import { InfoCard } from '../../components/InfoCard';

export function ViewOrder() {


  const params = useParams();
  const navigate = useNavigate();
  const [arrivalDate, setArrivalDate] = useState('');

  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);

  const [triggerRefresh, setTriggerRefresh] = useState(false);

  const [errors, setErrors] = useState({});

  useEffect(() => {

    async function fetchOrder() {
      try {
        setLoading(true)
        const response = await api.get(`/orders/${params.id}`);
        setOrder(response.data)
        setArrivalDate(response.data.arrival_date ?? '')
      } catch (error) {
        setErrors(error.response.data)
      } finally {
        setLoading(false)
      }
    }
    fetchOrder()
  }, [params.id, triggerRefresh])


  return (
    <div>
      <Header />
      <NarrowView>
        <div
          style={{
            position: 'relative',
            border: 'none',
            padding: '20px',
            boxSizing: 'border-box',
            borderRadius: '20px',
            minWidth: 'max-content',
            backgroundColor:'#9ed1ce55'
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(30px, 3vw, 40px)',
              color: 'var(--primary)',
            }}
          >•order:</h1>
          <div
            className='order-div'
            style={{
              backgroundColor : '#ffffff5e',
            }}
          >
            <span className='status'>
              status:
              <span
                className='status-view-val'
                style={{
                  backgroundColor: order.status == 'accepted' ? '#0ff0005e' : order.status == 'pending' ? '#f0b000d3' : order.status == 'cancelled' ? '#ff00005e' : '#6d69695e',
                  padding:'2px 20px', borderRadius:'10px'
                }}
              >
                {order.status}
              </span>
            </span>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                {order.contacts && (
                  <span className='order-view-label'>
                    contacts :
                    <span className='order-view-val'>
                      {order.contacts}
                    </span>
                  </span>
                )}
                {order.email && (
                  <span className='order-view-label'>
                    email :
                    <span className='order-view-val'>
                      {order.email}
                    </span>
                  </span>
                )}
                {order.address && (
                  <span className='order-view-label'>
                    address :
                    <span className='order-view-val'>
                      {order.address}
                    </span>
                  </span>
                )}
                {order.phone_number && (
                  <span className='order-view-label'>
                    phone number :
                    <span className='order-view-val'>
                      {order.phone_number}
                    </span>
                  </span>
                )}
              </div>
              <div>

                <span className='order-view-label'>
                  payment :
                  <span className='order-view-val'>
                    {order.payment}
                  </span>
                </span>
                {order.notes && (
                  <span className='order-view-label'>
                    notes :
                    <span className='order-view-val'>
                      {order.notes}
                    </span>
                  </span>
                )}
                {order.created_at && (
                  <span className='order-view-label'>
                    created at :
                    <span className='order-view-val'>
                      2{order.created_at.slice(1, 10)}
                    </span>
                  </span>
                )}
              </div>
            </div>

          </div>
          <br />
          <hr />
          <br />
          <OrderBody
            order={order}
            errors={errors}
            arrivalDate={arrivalDate}
            setArrivalDate={setArrivalDate}
            setTriggerRefresh={setTriggerRefresh}
            loading={loading}
            setLoading={setLoading}
            setErrors={setErrors}
          />
          <div
            style={{
              position: 'fixed',
              left: '50%',
              right: '50%',
              bottom: '20px'
            }}
          >
            < Button
              text='ok'
              color='green'
              image={checkImage}
              onClick={() => navigate('/orders')}
              isLoading={loading}
            />
          </div>
        </div>
      </NarrowView>
    </div>
  )
}

function OrderBody({ order, errors, arrivalDate, setArrivalDate, setTriggerRefresh, loading, setLoading, setErrors }) {

  async function updateStatus(orderId, newStatus) {
    setLoading(true);
    setErrors({});
    await api.patch(`/orders/${orderId}`, {
      status: newStatus,
    }).then((response) => {
      if (response.data.success)
        setTriggerRefresh((previousValue) => !previousValue)

    }).catch((errors) => {
      setErrors(errors.response.data.errors ?? errors.response.data)
    }).finally(() => {
      setLoading(false)
    })
  }

  async function handleClick(arrivalDate) {
    setLoading(true)
    setErrors({})
    await api.patch(`/orders/${order.id}`, {
      'arrival_date': arrivalDate
    }).then(res => {
      if (res.data.success) {
        setTriggerRefresh((previousValue) => !previousValue)
      }
    }).catch((err) => setErrors(err.response.data))
      .finally(() => setLoading(false))

  }


  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        {
          order.status == 'pending' &&
          <div
            className='date-section'
          >
            <InputFieldWithErrors
              type='date'
              name='arrival date'
              error={errors.arrival_date}
              value={arrivalDate}
              setValue={setArrivalDate}
              required={true}
              message='choose an arrival date'
            />
            <Button
              text='set date'
              onClick={() => handleClick(arrivalDate)}
              isLoading={loading}
              color='var(--success)'
              image={okImage}
            />
          </div>
        }
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <span className='order-view-label'>
            arrival date:
            <span className='order-view-val'>
              {order.arrival_date ?? "DATE OF ARRIVAL HAS NOT BEEN SET YET"}
            </span>
          </span>
          <span className='order-view-label'>
            revenue:
            <span className='order-view-val'>
              {order.final_price_in_cents ?? 'PRICE THE ORDER ITEMS TO GET THE FINAL PRICE'}
            </span>
          </span>
        </div>
      </div>
      < h2
        style={{
          fontSize: 'clamp(30px, 3vw, 40px)',
          color: 'var(--primary)',
        }}
      >•order items:</h2 >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '5px',
          width: '100%',
          gap: '20px',
        }}
      >
        {order.order_items?.map((item) => (
          <OrderItemExpanded
            key={item.id}
            setTriggerRefresh={setTriggerRefresh}
            item={item}
            order={order}
          />
        ))}
      </div>
      {order.status === 'pending' && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop:'20px'
            }}
          >
            <Button
              text='accept'
              color='green'
              onClick={(e) => {
                e.stopPropagation()
                updateStatus(order.id, 'accepted')
              }}
              isLoading={loading}
            />
            <Button
              text='cancel'
              color='red'
              onClick={(e) => {
                e.stopPropagation()
                updateStatus(order.id, 'cancelled')
              }}
              isLoading={loading}
            />
          </div>
        </>
      )
      }
      {order.status === 'accepted' && (
        <Button
          text='declare as done'
          color='green'
          onClick={(e) => {
            e.stopPropagation()
            updateStatus(order.id, 'done')
          }}
          isLoading={loading}
        />)}
    </>
  )

}

export function OrderItemExpanded({ item, order, setTriggerRefresh }) {
  const [unitP, setUnitP] = useState('');
  const [totalP, setTotalP] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  async function handlePrice(priceName, price) {
    setLoading(true)
    setErrors({})
    await api.patch(`/orders/items/${item.id}`, {
      [priceName]: price
    }).then(res => {
      if (res.data.success) {
        setTriggerRefresh((previousValue) => !previousValue)
      }
    }).catch((err) => setErrors(err.response.data))
      .finally(() => setLoading(false))

  }

  async function handleDownload(file) {
    setLoading(true)
    setErrors({})

    await api.post(`/orders/items/files/${item.id}`, {
      path: file
    }, {
      responseType: 'blob'
    }).then(res => {
      const url = window.URL.createObjectURL(res.data)
      const link = document.createElement('a')

      link.href = url
      link.download = file.split('/').pop()
      link.click()

      window.URL.revokeObjectURL(url)
    }).catch((err) => {
      setErrors(err.response?.data ?? {})
    }).finally(() => setLoading(false))
  }

  if (item.purchase)
    return (

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '20px',
          border: '3px solid var(--shadow)',
          borderRadius: '10px',
          padding: '10px',
          boxSizing: 'border-box',
          width: '100%',
          minWidth: 'max-content'
        }}
      >
        <div
          className='item-div'
        >
          <span className='order-view-label'>
            book title:
            <span className='order-view-val'>
              {item.book_title ?? 'no specific book'}
            </span>
          </span>
          <span className='order-view-label'>
            quantity purchased:
            <span className='order-view-val'>
              {item.quantity}
            </span>
          </span>
          <span className='order-view-label'>
            client comment:
            <span className='order-view-val'>
              {item.comment ?? 'no comment has been submitted'}
            </span>
          </span>
        </div>
        {
          order.status == 'pending' &&
          <>
            <div
              className='date-section'
            >
              <InputFieldWithErrors
                type='number'
                name='unit price'
                error={errors.unit_price_in_cents}
                value={unitP}
                setValue={setUnitP}
                required={true}
                message='enter the suitable price for this order item'
              />
              <Button
                text='calculate'
                onClick={() => handlePrice('unit_price_in_cents', unitP)}
                isLoading={loading}
                color='var(--success)'
                image={okImage}
              />
            </div>
          </>
        }
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            width: 'max-content'
          }}
        >
          <span className='order-view-label'>
            unit price :
            <span className='order-view-val'>
              {item.unit_price_in_cents ?? "PRICE HAS NOT BEEN SET YET"}
            </span>
          </span>
          <span className='order-view-label'>
            total price in cents:
            <span className='order-view-val'>
              {item.total_price_in_cents ?? "SET THE UNIT PRICE FOR THIS TO BE CALCULATED"}
            </span>
          </span>
        </div>
        <hr />
      </div>

    )

  else
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '20px',
          border: '3px solid var(--shadow)',
          borderRadius: '10px',
          padding: '10px',
          boxSizing: 'border-box',
          width: '100%'
        }}
      >
        <p
          style={{
            fontSize: 'clamp(20px, 3vw, 25px)',
            color: 'var(--primary)',
            fontWeight: 'bold'
          }}
        >the client requests the following services:</p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          <span className='order-view-label'>
            print  <input className="checkbox-input" type='checkbox' checked={item.print} readOnly />
          </span>
          <span className='order-view-label'>
            publish  <input type='checkbox' checked={item.publish} readOnly />
          </span>
          <span className='order-view-label'>
            translate  <input type='checkbox' checked={item.translate} readOnly />
          </span>
          <span className='order-view-label'>
            other  <input type='checkbox' checked={item.other} readOnly />
          </span>
        </div>
        <span className='order-view-label'>
          client comment:
          <span className='order-view-val'>
            {item.comment ?? 'no comment has been submitted'}
          </span>
        </span>

        <p
          style={{
            fontSize: 'clamp(20px, 3vw, 25px)',
            color: 'var(--primary)',
            fontWeight: 'bold'
          }}
        >files:</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '10px',
            marginBottom: '10px'
          }}
        >
          {
            item.files?.map((file, index) =>
              <Button
                key={file ?? index}
                text={`download file ${index}`}
                onClick={() => handleDownload(file)}
                isLoading={loading}
                color='var(--success)'
                image={downloadImage}
              />
            )
          }
        </div>
        {
          order.status == 'pending' &&
          <div className='date-section'>
            <InputFieldWithErrors
              type='number'
              name='total price'
              error={errors.total_price_in_cents}
              value={totalP}
              setValue={setTotalP}
              required={true}
              message='enter the suitable price for this order item'
            />
            <Button
              text='set price'
              onClick={() => handlePrice('total_price_in_cents', totalP)}
              isLoading={loading}
              color='var(--success)'
              image={okImage}
            />
          </div>
        }
        <span className='order-view-label'>
          total price in cents:
          <span className='order-view-val'>
            {item.total_price_in_cents ?? "price has not been set yet"}
          </span>
        </span>
        <hr />
      </div>
    )
}
