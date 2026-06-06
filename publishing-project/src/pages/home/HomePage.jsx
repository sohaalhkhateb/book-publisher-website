import { Header } from '../../components/Header'
import { MainMenu } from '../../components/MainMenu'
import { SubMenu } from '../../components/SubMenu'
import './HomePage.css'
import { Products } from './Products'
import { Options } from '../../components/Options'
import { WareHousePage } from '../wharehouse/WareHousePage'
import { useEffect, useState } from 'react'
import plusIcon from '../../assets/images/icons/plus.png'
import { AddBook } from '../../components/AddBook'
import axios from 'axios'
import { BookDetails } from './BookDetails'
import { EmployeePage } from '../manage-employees/EmployeePage'
import { SearchComponent } from '../../components/SearchComponent'

export function HomePage({ homeProducts, setHomeProducts, showOptionList, setShowOptionList }) {
  const [addBook, setAddBook] = useState(false);
  const [searchBooks, setSearchBooks] = useState(false);
  useEffect(() => {

  }, [showOptionList])
  /*useEffect(() => {
    const getHomeProducts = async () =>{
      const response = await axios.get('');
      setHomeProducts(response.data);
    }
    getHomeProducts();
  },[]);
  */
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
        setHomeProducts={setHomeProducts}
        searchBooks={searchBooks}
        setSearchBooks={setSearchBooks}
      />
      <Options
        showOptionList={showOptionList}
        setShowOptionList={setShowOptionList}
      />
      <MainMenu />
      <div className='content-container'>
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

      </div>
      <SubMenu />
    </div>
  )
}