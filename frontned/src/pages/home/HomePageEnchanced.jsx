import './HomePage.css'
import { useState } from 'react'
import plusIcon from '../../assets/images/icons/add.png'
import { AddBook } from '../../components/AddBook'
import { BookDetails } from './BookDetails'
import { Products } from './Products'

export function HomePageEnchanced({books}) {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [addBook, setAddBook] = useState(false);
  /*useEffect(() => {
    const getbooks = async () =>{
      const response = await axios.get('');
      setbooks(response.data);
    }
    getbooks();
  },[]);
  */
  const selectedBook = books.find((book) =>
    book.id === selectedBookId);

  function addBookActive() {
    setAddBook(true);
  }

  return (
      <div className='content-container'>
       
        {
          selectedBook ? (
            <BookDetails
              book={selectedBook}
              onClose={() => setSelectedBookId(null)}
            />
          ) : (
            
            <div className='products-container'>
              <Products
                books={books}
                setSelectedBookId={setSelectedBookId}
              />
              {
                addBook &&
                <AddBook
                  setAddBook={setAddBook}
                />
              }
              <div
                className="add-books-container"
                onClick={addBookActive}
              >
                <img
                  src={plusIcon}
                  alt=""
                  className='add-books-icon'
                />
              </div>
            </div>
          )
        }

      </div>
  )
}