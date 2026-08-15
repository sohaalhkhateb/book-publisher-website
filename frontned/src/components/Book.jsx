import { BookImage } from "./BookImage";
import './Book.css'

export function Book({book, selectedBookIds, onClick}) {
    return (
        <div 
            className="book-container"
            onClick={onClick}   
            style={{
                backgroundColor: selectedBookIds ? 'var(--success)' : 'rgba(200, 211, 245, 0.428)',
            }} 
        >
            <BookImage src={book.image} />
            <p className="book-title">{book.title}</p>
            <div className="labels-section">
                <span className='label'>
                    author:
                    <span className='book-val'>
                        {book.author}
                    </span>
                </span>
                <span className='label'>
                    page count:
                    <span className='book-val'>
                        {book.page_count}
                    </span>
                </span>
                <span className='label'>
                    edition:
                    <span className='book-val'>
                        {book.edition}
                    </span>
                </span>
            </div>
        </div>
    )
}