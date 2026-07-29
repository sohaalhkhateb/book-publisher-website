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
            details='Books that are fully prepared and ready for sale,
             printing, or distribution. This usually means the editing, design,
             and production work is complete'
            secificClass='finished-books'
          />
          <WarehouseLink
            to='/progress-books'
            title='Books in-progress'
            details='Books that are still being worked on, such as editing,
             formatting, translation, or cover preparation. They are not ready yet,
             but they are actively moving through the publishing process'
            secificClass='books-in-progress'
          />
          <WarehouseLink
            to='/need-review-books'
            title='Books review-needed'
            details='Books that need a check before moving forward.
             This can mean editorial review, quality review, approval,
             or fixing an issue before publication'
            secificClass='review'
          />
          <WarehouseLink
            to='/goods'
            title='Goods'
            details='Goods related to books,such as:
              posters and other goods'
            secificClass='goods'
          />
          <WarehouseLink
            to='/samples'
            title='samples'
            details='Sample copies or promotional copies used for marketing,
             previews, or sales presentations.
             These are often used to show a book before full release or to help the sales team'
            secificClass='samples'
          />
          <WarehouseLink
            to='/ebooks'
            title='ebooks'
            details='Digital versions of books that are published and delivered electronically instead of in print.
             This section is useful for tracking titles that are sold as downloadable or online-readable filess'
            secificClass='ebooks'
          />
          <WarehouseLink
            to='/not-sold-books'
            title='Related books not sold'
            details='Books that are connected to the catalog but are not currently being sold.
             This may include archived titles, unavailable books,
             or titles kept for reference or future relaunch'
            secificClass='not-solid'
          />
        </div>
      </div>
      <SubMenu />
    </div>
  )
}