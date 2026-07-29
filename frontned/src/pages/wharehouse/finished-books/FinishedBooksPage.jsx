import PageLayout from '../../PageLayout'
import { ReviewBooks } from '../../../components/ReviewBooks'
import './FinishedBooksPage.css'
import { FinishedBooks } from './FinishedBooks'
import { ReviewBooksPage } from '../../../components/ReviewBooksPage'
export function FinishedBooksPage({ books, showOptionList, setShowOptionList, search, setSearch }) {
    return (
        <ReviewBooksPage
            books={books}
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
        >
            <p className='review-books-title'>
                Finished Books:
            </p>
            <FinishedBooks />
        </ReviewBooksPage>
    )
}