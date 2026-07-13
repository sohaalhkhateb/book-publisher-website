import './ReviewBook.css'
import { BookImage } from './BookImage'
export function ReviewBook({children, book}) {
    return(
        <div className="review-book-container">
            <BookImage
                src={book.image}
            />
            <div className='review-book-without-img'>
                <p className='review-book-txt'>
                    book name: {book.title}
                </p>
                <p className='review-book-txt'>
                    author : {book.author}
                </p>
                <p className='review-book-txt'>
                    number of printed copies : {book.copies}
                </p>
                {children}
            </div>
        </div>
    )
}