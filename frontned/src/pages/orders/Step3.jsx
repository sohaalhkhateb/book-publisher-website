import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import api from "../../lib/axios";
import { useNavigate } from "react-router";
import './Step3.css'
import noItemsIcon from '../../assets/images/icons/no-items.png'
import leftArrow from '../../assets/images/icons/leftArrow.png'
import check from '../../assets/images/icons/check.png'
import add from '../../assets/images/icons/add-white.png'
import { InfoCard } from '../../components/InfoCard'


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
      {
        items.length != 0 &&
        <h2 style={{
          fontSize: 'clamp(20px, 2vw, 30px)',
          color: 'var(--primary)'
        }}>
          •Your order items :
        </h2>
      }
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
      <div className="step3-container">
        {
          items.map((item) => {
            return (
              <OrderItem item={item} />


            )
          })
        }
      </div>
      <br />
      <br />
      <hr />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '10px',
          position: 'fixed',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: '1000',
          padding: '12px 40px',
          paddingBottom: '40px',
        }}
      >
        <Button
          position='left'
          text='back'
          color='var(--accent)'
          onClick={() => navigate('/guestOrder/2')}
          image={leftArrow}
        />
        <Button
          position='right'
          text='add more order items'
          onClick={() => navigate('/guestOrder/4')}
          image={add}
        />
        <Button
          position='right'
          text='submit order'
          color='var(--success)'
          onClick={() => navigate('/guestOrder/7')}
          image={check}
        />
      </div>
    </>
  )
}

export function OrderItem({ item }) {
  if (item.purchase)
    return (
      <InfoCard
        title={item.book_title}
        subtitle={`quantity : ${item?.quantity}`}
        width={60}
      />
    )

  else
    return (

      <InfoCard
        title={<>
          {item.translate == '1' && (<span>translate |</span>)}
          {item.print == '1' && (<span>print |</span>)}
          {item.publish == '1' && (<span>publish |</span>)}
          {item.other == '1' && (<span>other |</span>)}
        </>}
        subtitle={`files sent : ${item.files?.length} files`}
        width={60}
      />

    )
}