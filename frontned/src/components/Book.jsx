import { BookImage } from "./BookImage";
import './Book.css'

export function Book({book,bookId,setBookId}) {
    return (
        <div className="book-container"
            onClick={()=>setBookId(book.id)}
            style={{
                backgroundColor: book.id==bookId ? 'var(--success)' : 'rgba(200, 211, 245, 0.428)',
            }}>

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