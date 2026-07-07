import { ReviewBook } from "./ReviewBook"

export function ReviewBooks({ books }) {
    return (
        <>
            <style>
                {`
                .review-books-container{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                `}
            </style>
            <div className="review-books-container">
                {
                    books.map((book) => {
                        return (
                            <ReviewBook
                                key={book.id}
                                book={book}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}