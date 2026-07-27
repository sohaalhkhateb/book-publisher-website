import { Product } from "./Product"
export function Products({books, setSelectedBookId }
){
  return(
    <>
    {
      books.map((book)=>{
        return(
          <Product
            key={book.id}
            book={book}
            onClick= {() => setSelectedBookId(book.id)}
          />
        )
      })
    }
    </>
  )
}