import { ReviewBooks } from "../../../components/ReviewBooks";
import book1Image from '../../../assets/images/book1.png'
export function FinishedBooks() {
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
                        <p className="review-book-txt">
                            publishedDate : {book.date}
                        </p>
                        <p className="review-book-txt">
                            price : {book.price}$
                        </p>
                    </>
                )
            }
        </ReviewBooks>
    )
}