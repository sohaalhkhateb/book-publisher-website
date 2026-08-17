import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import api from "../../lib/axios";
import { useNavigate } from "react-router";
import './Step3.css'
import noItemsIcon from '../../assets/images/icons/no-items.png'
import leftArrow from '../../assets/images/icons/leftArrow.png'
import check from '../../assets/images/icons/check.png'
import add from '../../assets/images/icons/add-white.png'

export function Step3() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    api.get('/sessionItems')
      .then((response) => {
        setItems(response.data)
      })
  }, [])
  console.log(items)
  return (
    <>
      {items.length == 0 &&
        <div
          className="no-items-div"
        >
          <img
            src={noItemsIcon}
            alt=""
            style={{
              width: '90px'
            }}
          />
          <p >no items , try adding one to your order !</p>
        </div>
      }

      {
        items.map((item) => {
          return (
            <OrderItem item={item} />
          )
        })
      }
      <div className="step3-btns">
        <Button
          position='left'
          text='back'
          color='var(--accent)'
          onClick={() => navigate('/orders/add/2')}
          image={leftArrow}
        />
        <Button
          position='right'
          text='add more order items'
          onClick={() => navigate('/orders/add/4')}
          image={add}
        />
        <Button
          position='right'
          text='submit order'
          color='var(--success)'
          onClick={() => navigate('/orders/add/7')}
          image={check}
        />
      </div>
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