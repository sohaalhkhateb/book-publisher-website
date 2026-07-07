import PageLayout from '../../PageLayout'
import { ReviewBooks } from '../../../components/ReviewBooks'
import './FinishedBooksPage.css'
export function FinishedBooksPage({ books, showOptionList, setShowOptionList, search, setSearch }) {
    return (
        <PageLayout
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
        >
            <div className='finished-books-container content-container'>
                <p className='finished-books-title'>
                    Finished Books:
                </p>
                <ReviewBooks
                    books={books}
                />
            </div>
        </PageLayout>
    )
}