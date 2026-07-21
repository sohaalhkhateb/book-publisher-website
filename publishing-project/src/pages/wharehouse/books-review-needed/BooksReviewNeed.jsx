import { ReviewBooks } from '../../../components/ReviewBooks'
import book1Image from '../../../assets/images/book1.png'

export function BooksReviewNeed() {
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
            type: 'Finished Books',
            state: 'translating',
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
            type: 'Finished Books',
            state: 'translating',
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
                            assignedEditor : {book.assignedEditor}
                        </p>
                        <p className="review-book-txt">
                            reviewStatus : {book.reviewStatus}
                        </p>
                        <p className="review-book-txt">
                            reviewNotes : {book.reviewNotes}
                        </p>
                    </>
                )
            }
        </ReviewBooks>
    )
}