import { Link, useLocation, useNavigate, useSearchParams } from "react-router";
import personImage from '../../assets/images/icons/account.png'
import logoutImage from '../../assets/images/icons/logout.png'
import { SearchInput } from '../../components/SearchInput'
import menuImage from '../../assets/images/icons/menu.png'
import { Button } from "../../components/Button";
import api from "../../lib/axios";
import books from '../../assets/images/icons/books.png'
import { InputList } from "../../components/InputList";
import { useState } from "react";

export function Header({ empty = false }) {

  const [urlP, setUrlP] = useSearchParams()

  const navigate = useNavigate()
  const location = useLocation()

  const status = urlP.get('status') || ''

  function changeStatus(newStatus) {
    setUrlP((previousValue) => {
      const newParams = new URLSearchParams(previousValue)

      if (newStatus) {
        newParams.set('status', newStatus)
      } else {
        newParams.delete('status')
      }

      newParams.set('page', '1')

      return newParams
    })
  }
  const options = [
    {
      all:'all'
    },
    {
      translation: 'need translation',
    },
    {
      copyEditing: 'need copyediting',
    },
    {
      typeSetting: 'need typesetting',
    },
    {
      proofReading: 'need proofReading',
    },
    {
      printing: 'ready for printing',
    },
  ]

  if (empty)
    return (
      <div className="header-container">
        <div className="header-middle-section">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <img
              src={books}
              style={{
                width: '25px',
                height: '25px',
              }}
              alt=""
            />
            <Link className='web-name' to='/'>
              publishing house website
            </Link>
          </div>

        </div>
      </div>
    )
  else
    return (

      <div className="header-container">
        <Link className='header-left-section' to='/settings'>
          <img
            src={personImage}
            className='header-person-image'
          />
        </Link>
        <div className="header-middle-section">
          <Link className='web-name' to='/'>
            publisher
          </Link>
          <div className='header-search-section'>
            <SearchInput
              fallbackPage='/'
              targetPage='books'
            />
          </div>

          {
            location.pathname == '/' && (
              <InputList
                noGap={true}
                label=''
                options={options}
                value={status}
                setValue={changeStatus}
              />
            )
          }
          <Button
            image={logoutImage}
            text="logout"
            onClick={async () => { await api.post('/logout', {}); navigate('/login') }}
          />
        </div>
      </div>
    )
}