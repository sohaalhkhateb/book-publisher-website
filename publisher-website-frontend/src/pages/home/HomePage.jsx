import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import plusIcon from '../../assets/images/icons/plus.png'
import { AddBook } from '../../components/AddBook'
import { SearchComponent } from '../../components/SearchComponent'
import api from '../../lib/axios'
import { AuthContext } from '../../lib/contexts'
import PageLayout from '../layouts/PageLayout'
import './HomePage.css'
import { Products } from './Products'

export function HomePage({ homeProducts, setHomeProducts, showOptionList, setShowOptionList, setUser }) {
  const [addBook, setAddBook] = useState(false);
  const [searchBooks, setSearchBooks] = useState(false);
  const user = useContext(AuthContext);
  const nav = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const response = await api.get('/user');
      setUser(response.data)
    }
    getUser();
    if (!user) {
      nav('/login')
    }
  }, []);

  function addBookActive() {
    setAddBook(true);
  }
  function closeShowDetails() {
    setShowOptionList(false);
  }

  return (
    !user ? (
      <p>loading</p>
    )
      : (

        <PageLayout
          setUser={setUser}
          showOptionList={showOptionList}
          setShowOptionList={setShowOptionList}
          setHomeProducts={setHomeProducts}
          searchBooks={searchBooks}
          setSearchBooks={setSearchBooks}
          closeShowDetails={closeShowDetails}
        >
          {<div className='content-container'>
            {
              searchBooks &&
              <SearchComponent />
            }
            {
              !searchBooks &&
              <div className='products-container'>
                <Products
                  homeProducts={homeProducts}
                />
                {
                  addBook &&
                  <AddBook
                    setAddBook={setAddBook}
                  />
                }
              </div>
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
          </div>}
        </PageLayout>
      )
  )
}