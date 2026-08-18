import { useNavigate } from "react-router"
import { Product } from "./Product"
export function Products({ books }) {
  const navigate = useNavigate()
  return (
    <>
      {
        books?.map((book) => {
          return (
            <Product
              key={book.id}
              book={book}
              onClick={() => navigate(`/books/${book.id}`)}
            />
          )
        })
      }
    </>
  )
}