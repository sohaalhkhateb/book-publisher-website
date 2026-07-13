import { ReviewBooksPage } from "../../../components/ReviewBooksPage";
import { BooksNotSold } from "./BooksNotSold";

export function BooksNotSoldPage({ books, showOptionList, setShowOptionList, search, setSearch }) {
    return (
        <ReviewBooksPage
            books={books}
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
        >
            <p className='review-books-title'>
                Not Sold Books:
            </p>
            <BooksNotSold/>
        </ReviewBooksPage>
    )
}