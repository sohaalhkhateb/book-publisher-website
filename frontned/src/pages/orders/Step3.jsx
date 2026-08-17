import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import api from "../../lib/axios";
import { useNavigate } from "react-router";

export function Step3() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    api.get('/sessionItems')
      .then((response) => {
        setItems(response.data)
      })
  }, [])

  return (
    <>
      <p>{items.isEmpty?null:'no items , try adding one to your order !'}</p>
      {
        items.map((item) => {
          return (
            <OrderItem item={item} />
          )
        })
      }
      <Button
        text='add more order items'
        onClick={() => navigate('/orders/add/4')}
      />
      <Button
        text='submit order'
        onClick={() => navigate('/orders/add/7')}
      />
    </>
  )
}

export function OrderItem({ item }) {

  return (
    <>
      <span>
        {item.pruchase && (<span>purchase |</span>)}
        {item.print && (<span>print |</span>)}
        {item.publish && (<span>publish |</span>)}
        {item.other && (<span>other |</span>)}
      </span>
      <p>{item.book_title && `book title ${item.book_title}`}</p>
      <p>quantity : {item.quantity}</p>

    </>

  )
}