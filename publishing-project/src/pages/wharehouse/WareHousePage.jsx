import { Header } from '../../components/Header'
import { MainMenu } from '../../components/MainMenu'
import { Options } from '../../components/Options'
import { SubMenu } from '../../components/SubMenu'
import './WareHousePage.css'
import { Link } from 'react-router'

export function WareHousePage({setHomeProducts, setShowOptionList, showOptionList}) {
  function closeShowDetails() {
    setShowOptionList(false);
  }
  return (
    <div 
      className='container'
      onClick={closeShowDetails}
    >
      <Header
        showOptionList={showOptionList}
        setShowOptionList={setShowOptionList}
        setHomeProducts={setHomeProducts}
      />
      <Options
        showOptionList={showOptionList}
        setShowOptionList={setShowOptionList}
      />
      <MainMenu />
      <div className='content-container'>
        <div className='warehouse-container'>
          <Link
            to='/inventory'
            className='inventory-management-container sub-container'
          >
            <p className='title'>Inventory Management</p>
            <p className='details'>manage the amount of paper ,
              resources needed to produce books
            </p>
          </Link>
          <Link to='' className='finished-books-container sub-container'>
            <p className='title'>finished books</p>
            <p className='details'>information about published,
              ready-to-sell and printed books
            </p>
          </Link>
          <Link to='' className='books-in-progress-container sub-container'>
            <p className='title'>Books in-progress</p>
            <p className='details'>Books under translation,
              accepted for publication but not yet published
            </p>
          </Link>
          <Link to='' className='review-container sub-container'>
            <p className='title'>Books review-needed</p>
            <p className='details'>Copies of books that need to be
              checked before publication and production
            </p>
          </Link>
          <Link to='' className='goods-container sub-container'>
            <p className='title'>Goods</p>
            <p className='details'>Goods related to books,such as:
              posters and other goods
            </p>
          </Link>
          <Link to='' className='samples-container sub-container'>
            <p className='title'>samples</p>
            <p className='details'>Goods related to books,such as:
              posters and other goods
            </p>
          </Link>
          <Link to='' className='ebooks-container sub-container'>
            <p className='title'>ebooks</p>
            <p className='details'>Goods related to books,such as:
              posters and other goods
            </p>
          </Link>
        </div>
      </div>
      <SubMenu />
    </div>
  )
}