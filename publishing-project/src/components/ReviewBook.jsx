import './ReviewBook.css'
import { BookImage } from './BookImage'
export function ReviewBook({book}) {
    return(
        <div className="finished-book-container">
            <BookImage
                src={book.image}
            />
            <div className='finished-book-without-img'>
                <p className='finished-book-txt'>
                    book name: {book.title}
                </p>
                <p className='finished-book-txt'>
                    author : {book.author}
                </p>
                <p className='finished-book-txt'>
                    number of printed copies : {book.copies}
                </p>
                <p className='finished-book-txt'>
                    publishing date : {book.date}
                </p>
                <p className='finished-book-txt'>
                    price for one copy : {book.price}$ 
                </p>
            </div>
        </div>
    )
}