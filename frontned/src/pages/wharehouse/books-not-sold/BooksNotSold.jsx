import { ReviewBooks } from "../../../components/ReviewBooks";
import book1Image from '../../../assets/images/book1.png'

export function BooksNotSold() {
    const books = [
        {
            title: 'SUN EATER',
            image: book1Image,
            number: 10,
            author: 'Megan campisi',
            date: '10/12/2022',
            pages: 222,
            edit: 'first',
            copies: 200,
            price: 300,
            assignedEditor: 'Omar Nour',
            assignedDesigner: 'Sara Kez',
            createdAt: '2025-06-15T09:00:00Z',
            updatedAt: '2026-01-05T16:45:00Z',
            reviewStatus: 'pending',
            reviewNotes: 'Finish chapter 9; confirm historical timeline.',
            status: "finished",
            sampleType: "chapter-preview",
            type: 'Finished Books',
            visibility: "hidden",
            copiesInWarehouse: 40,
            copiesSold: 960,
            format: "print",
            state: 'translating',
            note: "Out of active promotion; kept for bundles.",
            id: crypto.randomUUID()
        },
        {
            title: 'SUN EATER',
            image: book1Image,
            number: 10,
            author: 'Megan campisi',
            date: '10/12/2022',
            pages: 222,
            edit: 'first',
            copies: 200,
            price: 300,
            assignedEditor: 'Omar Nour',
            assignedDesigner: 'Sara Kez',
            createdAt: '2025-06-15T09:00:00Z',
            updatedAt: '2026-01-05T16:45:00Z',
            reviewStatus: 'pending',
            reviewNotes: 'Finish chapter 9; confirm historical timeline.',
            status: "finished",
            sampleType: "reviewer-copy",
            type: 'Finished Books',
            visibility: "bundle-only",
            copiesInWarehouse: 40,
            copiesSold: 960,
            format: "print",
            state: 'translating',
            note: "Available only in boxed sets.",
            id: crypto.randomUUID()
        }
    ];
    return (
        <ReviewBooks books={books}>
            {
                (book) => (
                    <>
                        <p className='review-book-txt'>
                            Printed copies : {book.copies}
                        </p>
                        <p className="review-book-txt">
                            status : {book.status}
                        </p>
                        <p className="review-book-txt">
                            visibility : {book.visibility}
                        </p>
                        <p className="review-book-txt">
                            copiesInWarehouse : {book.copiesInWarehouse}
                        </p>
                        <p className="review-book-txt">
                            copiesSold : {book.copiesSold}
                        </p>
                        <p className="review-book-txt">
                            format : {book.format}
                        </p>
                        <p className="review-book-txt">
                            note : {book.note}
                        </p>
                    </>
                )
            }
        </ReviewBooks>
    )
}