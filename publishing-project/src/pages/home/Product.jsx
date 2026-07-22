import { BookDetails } from './BookDetails';
import './Product.css'
import { useState } from 'react';

export function Product({
  title, image, number, writer }) {
  const [showDetails, setShowDetails] = useState(false);
  const openShowDetails = () => {
    setShowDetails(!showDetails);
  }
  return (
    <div
      className='product-container'
    >
      <img
        src={image}
        className='product-image'
        onClick={openShowDetails}
        alt=""
      />
      <p className='product-title paragraph'>
        Book Title: {title}
      </p>
      <p className='number-copies paragraph'>
        Number of copies: {number}
      </p>
      <p className='writer-name paragraph'>
        Writer's Name: {writer}
      </p>
      {
        showDetails &&
        <BookDetails
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          title={title}
          image={image}
          number={number}
          writer={writer}
        />
      }
    </div>
  )
}