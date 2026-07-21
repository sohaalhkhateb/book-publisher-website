import { ReviewBooks } from "../../../components/ReviewBooks";
import book1Image from '../../../assets/images/book1.png'

export function Ebooks() {
    const books = [
        {
            title: "The Silent City",
            image: book1Image,
            number: 10,
            author: "Layla Hassan",
            date: '10/12/2022',
            pages: 222,
            ebookPrice: 7.99,
            currency: "USD",
            format: "ebook",
            isEbook: true,
            status: "finished",
            ebookFiles: [
                { format: "epub", url: "/files/ebooks/silent-city.epub" },
                { format: "pdf", url: "/files/ebooks/silent-city.pdf" }
            ],
            copiesSold: 430, // digital copies sold / downloads
            id: crypto.randomUUID(),
        },
        {
            id: crypto.randomUUID(),
            title: "Modern Data Workflows",
            image: book1Image,
            number: 10,
            author: "Sam Hatem",
            date: '10/12/2022',
            pages: 222,
            ebookPrice: 9.99,
            currency: "USD",
            format: "ebook",
            isEbook: true,
            status: "finished",
            ebookFiles: [
                { format: "epub", url: "/files/ebooks/data-workflows.epub" },
                { format: "mobi", url: "/files/ebooks/data-workflows.mobi" }
            ],
            copiesSold: 210,
            id: crypto.randomUUID(),
        }
    ];
    return (
        <ReviewBooks books={books}>
            {
                (book) => (
                    <>
                        <p className='review-book-txt'>
                            {book.ebookPrice} {book.currency}
                        </p>
                        <p className='review-book-txt'>
                            {book.status}
                        </p>
                        <p className='review-book-txt'>
                            copiesSold (digital / downloads) : {book.copiesSold}
                        </p>
                    </>
                )
            }
        </ReviewBooks>
    )
}