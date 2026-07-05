import { Header } from '../../components/Header'
import { MainMenu } from '../../components/MainMenu'
import { SubMenu } from '../../components/SubMenu'
import './HomePage.css'
import { Options } from '../../components/Options'
import { WareHousePage } from '../wharehouse/WareHousePage'
import { useEffect, useState } from 'react'
import plusIcon from '../../assets/images/icons/add.png'
import { AddBook } from '../../components/AddBook'
import axios from 'axios'
import { BookDetails } from './BookDetails'
import { EmployeePage } from '../manage-employees/EmployeePage'
import { SearchComponent } from '../../components/SearchComponent'
import { Products } from './Products'

export function HomePage({ books, showOptionList, setShowOptionList, search, setSearch }) {
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
  function closeShowDetails() {
    setShowOptionList(false);
  }
  return (
    <div
      className='home-page-container container'
      onClick={closeShowDetails}
    >
      <Header
        showOptionList={showOptionList}
        setShowOptionList={setShowOptionList}
        search={search}
        setSearch={setSearch}
      />
      <Options
        showOptionList={showOptionList}
        setShowOptionList={setShowOptionList}
      />
      <MainMenu />
      <div className='content-container'>
        {
          search &&
          <SearchComponent />
        }
        {
          selectedBook ? (
            <BookDetails
              book={selectedBook}
              onClose= {() => setSelectedBookId(null)}
            />
          ) : (
            !search &&
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
      <SubMenu />
    </div>
  )
}