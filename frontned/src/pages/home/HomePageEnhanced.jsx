import { useState, useEffect } from 'react'
import { useNavigate, useOutletContext, useSearchParams } from 'react-router'
import { Products } from './Products'
import { Button } from '../../components/Button'
import { BookStatus } from '../../lib/BookStatus'
import plusIcon from '../../assets/images/icons/addIcon.png'
import leftImage from '../../assets/images/icons/leftArrow.png'
import rightImage from '../../assets/images/icons/rightArrow.png'
import api from '../../lib/axios'
import './HomePage.css'


export function HomePageEnhanced() {
  const setLayoutContext= useOutletContext()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [statusUpdate, setStatusUpdate] = useState(false)

  const [urlP] = useSearchParams()
  const navigate = useNavigate()

  const query = urlP.get('search') || ''
  const status = urlP.get('status') || ''


  useEffect(() => {
    setLayoutContext({
      searchBar:true,
      sideBar:true,
      narrowView:false
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
  }, [statusUpdate, page, query, status])

  useEffect(() => {
    setPage(1)
  }, [query])

  return (
    <>
      <div className='products-container'>

        <BookStatus
          value={[
            statusUpdate,
            setStatusUpdate,
          ]}>
          <Products books={data.data} />
        </BookStatus>

      </div>

        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform:'translate(-50%)',
            bottom: '10px',
            width: 'max-content',
          }}
        >
          <Button
            text='add a book'
            position='right'
            image={plusIcon}
            onClick={() => navigate('/books/add')}
          />
        </div>

        {data.current_page > 1 && (
          <div className='btn-1'>
            <Button
              image={leftImage}
              onClick={() =>
                setPage(
                  (previousValue) =>
                    previousValue - 1
                )
              }
            />
          </div>
        )}

        {data.current_page < data.last_page && (
          <div className='btn-2'>
            <Button
              image={rightImage}
              onClick={() =>
                setPage(
                  (previousValue) =>
                    previousValue + 1
                )
              }
            />
          </div>
        )}
      </>
  )
}