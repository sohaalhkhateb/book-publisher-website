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

  const [books, setBooks] = useState([]);
  const [statusUpdate, setStatusUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getbooks = async () => {
      const response = await api.get('/books');
      setBooks(response.data.books);
    }
    getbooks();
  }, [statusUpdate]);



  return (
    <div className='content-container'>
      <div className='products-container'>

        <BookStatus value={[statusUpdate, setStatusUpdate]}>
          <Products books={books} />
        </BookStatus>
      </div>
      <div className='add-books-container'>
        <div
          style={{
            position:'fixed',
            right:'50%',
            left:'50%',
            bottom:'20px',
            width:'max-content'
          }}
        >
          <Button
            text='add a book'
            position='right'
            image={plusIcon}
            onClick={() => navigate('/books/add')}
          />
        </div>

        <div
          className='btn-1'
        >
          <Button
            image={leftImage}
            onClick={() => { }}
          />
        </div>
        <div className='btn-2'>
          <Button
            image={rightImage}
            onClick={() => { }}
          />
        </div>

      </div>
    </div>
  )
}


