import { Header } from '../../components/Header'
import { MainMenu } from '../../components/MainMenu'
import { Options } from '../../components/Options'
import { SubMenu } from '../../components/SubMenu'
import { WarehouseLink } from '../../components/WarehouseLink'
import './WareHousePage.css'
import { Link } from 'react-router'

export function WareHousePage({ setHomeProducts, setShowOptionList, showOptionList }) {
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
          <WarehouseLink
            to='/inventory'
            title='Inventory Management'
            details='manage the amount of paper ,
              resources needed to produce books'
            secificClass='inventory'
          />
          <WarehouseLink
            to='/finished-book'
            title='finished books'
            details='information about published,
              ready-to-sell and printed books'
            secificClass='finished-books'
          />
          <WarehouseLink
            to='/'
            title='Books in-progress'
            details='Books under translation,
              accepted for publication but not yet published'
            secificClass='books-in-progress'
          />
          <WarehouseLink
            to='/'
            title='Books review-needed'
            details='Copies of books that need to be
              checked before publication and production'
            secificClass='review'
          />
          <WarehouseLink
            to='/'
            title='Goods'
            details='Goods related to books,such as:
              posters and other goods'
            secificClass='goods'
          />
          <WarehouseLink
            to='/'
            title='samples'
            details='Goods related to books,such as:
              posters and other goods'
            secificClass='samples'
          />
          <WarehouseLink
            to='/'
            title='ebooks'
            details='Goods related to books,such as:
              posters and other goods'
            secificClass='ebooks'
          />
        </div>
      </div>
      <SubMenu />
    </div>
  )
}