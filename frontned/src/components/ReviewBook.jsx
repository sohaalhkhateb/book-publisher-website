import './ReviewBook.css'
import { BookImage } from './BookImage'
export function ReviewBook({ children, book }) {
    return (
        <div className="review-book-container">
            <BookImage
                src={book.image}
            />
            <div className='review-book-without-img'>
                <p className='review-book-txt'>
                    {book.title}
                </p>
                <p className='review-book-txt'>
                    By : {book.author}
                </p>
                {children}
            </div>
        </div>
    )
}