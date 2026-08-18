import './BookInfo.css'

export function BookInfo({ title, edition, author, copies, id,bookId, onClick }) {
    return (
        <div className="book-info-container"
            style={{
                backgroundColor: id == bookId ? 'var(--success)' : 'rgba(200, 211, 245, 0.428)',
            }}
            onClick={onClick}
        >
            <span className='book-info-label'>
                title :
                <span className='book-val'>
                    {title}
                </span>
            </span>
            <span className='book-info-label'>
                author :
                <span className='book-val'>
                    {author}
                </span>
            </span>
            <span className='book-info-label'>
                edition :
                <span className='book-val'>
                    {edition}
                </span>
            </span>
            <span className='book-info-label'>
                number of copies :
                <span className='book-val'>
                    {copies}
                </span>
            </span>
        </div>
    )
}