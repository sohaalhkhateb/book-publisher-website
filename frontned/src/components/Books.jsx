import { Book } from "./Book"

export function Books({ books, bookId, setBookId }) {
    if (!books) {
        return(
            <h1>there are no books </h1>
        )
    }
    return (
        <>
            {
                books?.map((book) => {
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