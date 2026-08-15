import { BookImage } from '../../components/BookImage';
import { useNavigate } from 'react-router'
import { Status } from '../../components/BookStatus';
import './Product.css'

export function Product({ book }) {

  const navigate = useNavigate();

  return (
    <div
      className='product-container'
      onClick={() => navigate(`/books/${book.id}`)}
    >
      <BookImage src={book.image} />
      <p className='title'>{book.title}</p>
      <span className='label'>
        author:
        <span className='author-val'>
          {book.author}
        </span>
      </span>
      <span className='label'>
        <p style={{ textAlign: 'center' }}>status:</p>

        <Status
          statusValue={book.status}
          id={book.id}
        />
      </span>

    </div>
  )
}

