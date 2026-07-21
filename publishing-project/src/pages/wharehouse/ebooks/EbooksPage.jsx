import { ReviewBooksPage } from "../../../components/ReviewBooksPage";
import { Ebooks } from "./Ebooks";

export function EbooksPage({ books, showOptionList, setShowOptionList, search, setSearch }) {
    return (
        <ReviewBooksPage
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
        >
            <p className='review-books-title'>
                E-Books:
            </p>
            <Ebooks/>
        </ReviewBooksPage>
    )
}