import { ReviewBooksPage } from '../../../components/ReviewBooksPage'
import { BooksReviewNeed } from './BooksReviewNeed'
import './BooksReviewNeedPage.css'
export function BooksReviewNeedPage({ books, showOptionList, setShowOptionList, search, setSearch }) {
    return (
        <ReviewBooksPage
            books={books}
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
        >
            <p className='review-books-title'>
                Review Nedded Books:
            </p>
            <BooksReviewNeed/>
        </ReviewBooksPage>
    )
}