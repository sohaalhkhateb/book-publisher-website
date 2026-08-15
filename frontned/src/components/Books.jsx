import { useState } from "react";
import { Book } from "./Book"

export function Books({ books, selectedBookIds, onToggleBook }) {
      
    return(
        <>
            {
                books.map((book) => {
                    return (
                        <Book
                            key={book.id}
                            book={book}
                            selectedBookIds={selectedBookIds === book.id}
                            onClick={() => {
                                onToggleBook(book.id)
                                /* choose this book with ${book.id} */}}
                        />
                    )
                })
            }
        </>
    )
}