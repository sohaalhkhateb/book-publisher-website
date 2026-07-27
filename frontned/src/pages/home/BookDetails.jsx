import './BookDetails.css'
import closeIcon from '../../assets/images/icons/close-blue.png'
import bookImage from '../../assets/images/book1.png'
import { data } from 'react-router';
import { BookImage } from '../../components/BookImage';
export function BookDetails({ book,  onClose}) {
    return (
        <div className='book-details-with-img'>
            <BookImage
                src={book.image}
            />
            <div className="book-details-container">
                <img
                    src={closeIcon}
                    className='close-icon'
                    alt=""
                    onClick={onClose}
                />
                <p className='book-details-info'>
                    Book Title: {book.title}
                </p>
                <p className='book-details-info'>
                    Number of copies: {book.number}
                </p>
                <p className='book-details-info'>
                    Author's Name: {book.author}
                </p>
                <p className='book-details-info'>
                    edition : {book.edit}
                </p>
                <p className='book-details-info'>
                    publishing date : {book.date}
                </p>
                <p className='book-details-info'>
                    number of pages : {book.pages}
                </p>
            </div>
        </div>
    )
}