import { BookImage } from '../../components/BookImage';
import { useNavigate } from 'react-router'
import './Product.css'
import { useRef, useState } from 'react';


function Status({ statusValue, id }) {
  const listRef = useRef(null);
  function handleClick(e) {
    e.stopPropagation()
    listRef.current.

  }
  function getColor(statusValue) {
    switch (statusValue) {


      case 'need translation':
        return "#808080"

      case 'need copyEditing':
        return "#0da00d"

      case 'need typeSetting':
        return "#1515c8"

      case 'need proofReading':
        return "#c814c8"
      case 'ready for printing':
        return "#c3c314"
    }

  }
  return (
    <>
      <style>
        {`
          .status-val{ 
          font-weight :bold;
            color : ${getColor(statusValue)} ;
            background-color:${getColor(statusValue)}5e;
            padding : 1px 5px;
            border-radius:10px;
            border-bottom:3px solid ;
            margin-left :4px
            
        `}
      </style>
      <span className='status-val'
        onClick={handleClick}
      >
        {statusValue}
      </span>
      <StatusSelector
        ref={listRef}
        statusValue={statusValue}
        id={id}
      />
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
        <p style={{ textAlign: 'center' }}>status:</p>

        <Status
          statusValue={book.status}
          id={book.id}
        />
      </span>

    </div>
  )
}

function StatusSelector({ id, statusValue, ref }) {

  const [open, setOpen] = useState(false);
  const [selectedState, setSelectedState] = useState();
  return (
    open && (
      <div ref={ref}>
        <label>
          change the state to:
          <select
            value={selectedState}
            onChange={e => setSelectedState(e.target.value)}
          >
            <option value="need translation"></option>
            <option value="need copyediting"></option>
            <option value="need typesetting"></option>
            <option value="need proofReading"></option>
            <option value="ready for printing"></option>
          </select>
        </label>
      </div>
    )
  )
}