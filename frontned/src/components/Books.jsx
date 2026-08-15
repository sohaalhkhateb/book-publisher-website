import { Book } from "./Book"

export function Books({ books, bookId, setBookId }) {

    return (
        <>
            {
                books.map((book) => {
                    return (
                        <Book
                            key={book.id}
                            book={book}
                            bookId={bookId}
                            setBookId={setBookId}
                        />
                    )
                })
            }
        </>
    )
}