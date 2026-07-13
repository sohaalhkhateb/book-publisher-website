import { ReviewBooks } from '../../../components/ReviewBooks'
import { ReviewBooksPage } from '../../../components/ReviewBooksPage'
import { BooksInProgress } from './BooksInProgress'
import './BooksInProgressPage.css'

export function BooksInProgressPage({ books, showOptionList, setShowOptionList, search, setSearch }) {
    
    return (
        <ReviewBooksPage
            books={books}
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
        >
            <p className='review-books-title'>
                In Progress Books:
            </p>
            <BooksInProgress/>
        </ReviewBooksPage>
    )
}