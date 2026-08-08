import { BookImage } from '../../components/BookImage';
import { useNavigate } from 'react-router'
import './Product.css'
function Status() {

  function getColor(statusValue) {
    switch (statusValue) {
      case 'untouched':
        return "#808080"

      case 'under translation':
        return "#0da00d"

      case 'under copyediting':
        return "#1515c8"

      case 'under typesetting':
        return "#c814c8"

      case 'under proofReading':
        return "#c3c314"
      case 'ready for printing':
        return "#f38f42"
    }

  }
  let status ='untouched'
  return (
    <>
      <style>
        {`
          .status-val{ 
          font-weight :bold;
            color : ${getColor(status)} ;
            background-color:${getColor(status)}5e;
            padding : 1px 5px;
            border-radius:10px;
            border-bottom:3px solid ;
            margin-left :4px
            
        `}
      </style>
      <span className='status-val'>
        status
      </span>
    </>
  )
}
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
        current status :
        <Status />
      </span>

    </div>
  )
}