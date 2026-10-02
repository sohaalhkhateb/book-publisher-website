import { useState, useEffect } from 'react'
import { useNavigate, useOutletContext, useSearchParams } from 'react-router'
import { Products } from './Products'
import { Button } from '../../components/Button'
import { BookStatus } from '../../lib/BookStatus'
import EmptyPage from '../EmptyPage'
import plusIcon from '../../assets/images/icons/addIcon.png'
import leftImage from '../../assets/images/icons/leftArrow.png'
import rightImage from '../../assets/images/icons/rightArrow.png'
import api from '../../lib/axios'
import Loading from '../Loading'


export function HomePageEnhanced() {
  const setLayoutContext = useOutletContext()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [statusUpdate, setStatusUpdate] = useState(false)

  const [urlP] = useSearchParams()
  const navigate = useNavigate()

  const query = urlP.get('search') || ''
  const status = urlP.get('status') || ''


  useEffect(() => {
    setLayoutContext({
      searchBar: true,
      sideBar: true,
      narrowView: false,
      bodyHeader: 'available books:'
    })
    const getbooks = async () => {
      const response = await api.get('/books', {
        params: {
          'query': query || undefined,
          'status': status || undefined,
          page: page,
        },
      })

      setData(response.data)
    }

    getbooks()
  }, [statusUpdate, page, query, status,setLayoutContext])

  useEffect(() => {
    setPage(1)
  }, [query])

  if (data.data == null) {
    return <Loading />
  }
  if (data.data.length == 0) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <EmptyPage type='book' />
        <div
          style={{
            transform: 'translateY(-200px)'
          }}
        >
          <Button
            text='add a book'
            position='right'
            image={plusIcon}
            onClick={() => navigate('/books/add')}
          />
        </div>
      </div>

    )
  }
  else
    return (
      <>
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(181px, 1fr))',
            gap: '3px'
          }}>

          <BookStatus
            value={[
              statusUpdate,
              setStatusUpdate,
            ]}>
            <Products books={data.data} />
          </BookStatus>

        </div >

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            position: 'sticky',
            bottom: '10px',
            marginTop: '10px'
          }}>

          <div>
            {data.current_page > 1 && (

              <Button
                position='left'
                image={leftImage}
                onClick={() => setPage((previousValue) => previousValue - 1)}
              />
            )}
          </div>

          <Button
            text='add a book'
            position='right'
            image={plusIcon}
            onClick={() => navigate('/books/add')}
          />

          <div>
            {data.current_page < data.last_page && (

              <Button
                image={rightImage}
                onClick={() => setPage((previousValue) => previousValue + 1)}
              />
            )}
          </div>

        </div>

      </>
    )
}