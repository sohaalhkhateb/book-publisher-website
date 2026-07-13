import { ReviewBooksPage } from "../../../components/ReviewBooksPage";
import { SamplesBooks } from "./SamplesBooks";

export function SamplesBooksPage({ books, showOptionList, setShowOptionList, search, setSearch }) {
    return (
        <ReviewBooksPage
            books={books}
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
        >
            <p className='review-books-title'>
                 Book Samples:
            </p>
            <SamplesBooks/>
        </ReviewBooksPage>
    )
}