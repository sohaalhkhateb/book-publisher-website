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
    <>
      <Header />
      <NarrowView>
        <h1>order</h1>

        <p>status: {order.status}</p>
        {order.contacts && (
          <p>contacts: {order.contacts}</p>
        )}
        {order.email && (
          <p>email: {order.email}</p>
        )}
        {order.address && (
          <p>address: {order.address}</p>
        )}
        {order.phone_number && (
          <p>phone number: {order.phone_number}</p>
        )}
        <p>payment: {order.payment}</p>
        {order.notes && (
          <p>notes: {order.notes}</p>
        )}


        {order.created_at && (
          <p>created at: 2{order.created_at.slice(1, 10)}</p>
        )}

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

        < Button
          text='ok'
          color='green'
          image={checkImage}
          onClick={() => navigate('/orders')}
          isLoading={loading}
        />
      </NarrowView>
    </>
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
      {
        order.status == 'pending' &&
        <>
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
        </>
      }
      <p>arrival date: {order.arrival_date??"DATE OF ARRIVAL HAS NOT BEEN SET YET"}</p>
      <p>revenue: {order.final_price_in_cents ?? 'PRICE THE ORDER ITEMS TO GET THE FINAL PRICE'}</p>

      < h2 > order items</h2 >

      {order.order_items?.map((item) => (
        <OrderItemExpanded
          key={item.id}
          setTriggerRefresh={setTriggerRefresh}
          item={item}
          order={order}
        />
      ))}
      {order.status === 'pending' && (
        <>
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

      <>
        <p>book title: {item.book_title ?? 'no specific book'}</p>
        <p>quantity purchased: {item.quantity}</p>
        <p>client comment: {item.comment ?? 'no comment has been submitted'}</p>

        {
          order.status == 'pending' &&
          <>
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
          </>
        }
        <p>unit price : {item.unit_price_in_cents ?? "PRICE HAS NOT BEEN SET YET"}</p>
        <p> total price in cents: {item.total_price_in_cents ?? "SET THE UNIT PRICE FOR THIS TO BE CALCULATED"} </p>
      </>

    )

  else
    return (
      <>
        <p>the client requests the following services:</p>

        print  <input type='checkbox' checked={item.print} readOnly />
        publish  <input type='checkbox' checked={item.publish} readOnly />
        translate  <input type='checkbox' checked={item.translate} readOnly />
        other  <input type='checkbox' checked={item.other} readOnly />
        <p>client comment: {item.comment ?? 'no comment has been submitted'}</p>

        <p>files:</p>
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
        {
          order.status == 'pending' &&
          <>
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
          </>
        }
        <p> total price in cents: {item.total_price_in_cents ?? "price has not been set yet"} </p>
      </>
    )
}
