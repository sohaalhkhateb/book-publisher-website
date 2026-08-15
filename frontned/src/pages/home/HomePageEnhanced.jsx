import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Products } from './Products'
import { Button } from '../../components/Button'
import { BookStatus } from '../../lib/BookStatus'
import plusIcon from '../../assets/images/icons/add.png'

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


