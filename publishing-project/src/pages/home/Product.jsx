import { BookDetails } from './BookDetails';
import './Product.css'
import { useState } from 'react';

export function Product({ book, onClick }) {
  return (
    <div
      className='product-container'
    >
      <img
        src={book.image}
        className='product-image'
        onClick={onClick}
        alt=""
      />
      <p className='product-title paragraph'>
        Book Title: {book.title}
      </p>
      <p className='number-copies paragraph'>
        Number of copies: {book.number}
      </p>
      <p className='writer-name paragraph'>
        author's Name: {book.author}
      </p>
    </div>
  )
}