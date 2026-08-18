import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Products } from './Products'
import { Button } from '../../components/Button'
import { BookStatus } from '../../lib/BookStatus'
import plusIcon from '../../assets/images/icons/addIcon.png'
import leftImage from '../../assets/images/icons/leftArrow.png'
import rightImage from '../../assets/images/icons/rightArrow.png'
import api from '../../lib/axios'
import './HomePage.css'


export function HomePageEnhanced() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [statusUpdate, setStatusUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getbooks = async () => {
      const response = await api.get('/books', {
        params: { page }
      });
      setData(response.data);
    }
    getbooks();
  }, [statusUpdate, page]);




  return (
    <div className='content-container'>
      <div className='products-container'>

        <BookStatus value={[statusUpdate, setStatusUpdate]}>
          <Products books={data.data} />
        </BookStatus>
      </div>
      <div className='add-books-container'>
        <div
          style={{
            position: 'fixed',
            right: '50%',
            left: '50%',
            bottom: '20px',
            width: 'max-content'
          }}
        >
          <Button
            text='add a book'
            position='right'
            image={plusIcon}
            onClick={() => navigate('/books/add')}
          />
        </div>
        {data.from > 1 &&
          <div
            className='btn-1'
          >
            <Button
              image={leftImage}
              onClick={() => setPage((previousValue) => previousValue - 1)}
            />
          </div>}
        {data.to < data.total &&
          <div className='btn-2'>
            <Button
              image={rightImage}
              onClick={() => setPage((previousValue) => previousValue + 1)}
            />
          </div>}

      </div>
    </div>
  )
}


