import { useNavigate } from 'react-router'
import { Button } from '../../components/Button'
import { SearchInput } from '../../components/SearchInput'
import api from '../../lib/axios'

export function Header({ exists, login = true }) {
  const navigate = useNavigate()
  return (
    <div
      style={{
        backgroundColor: 'var(--primary)',
        height: '60px',
        position: 'sticky',
        zIndex: 999,
        top: '0px',
        display: 'grid',
        gridTemplateColumns: exists ? '1fr 3fr 1fr' : '5fr 1fr',
        placeItems: 'center'
      }}>

      <p
        style={{
          color: 'white',
          fontSize: '30px',
          fontSmooth: 'always',
          fontWeight: 'bold'
        }}>
        publisher house</p>

      {exists &&
        <SearchInput />
      }


      {login &&

        <Button
          text='logout'
          onClick={() => { api.post('/logout', {}); navigate('/login') }}
          color='crimson'
        />
      }



    </div >
  )
}