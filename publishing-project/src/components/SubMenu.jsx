import './SubMenu.css'
import bookIcon from '../assets/images/icons/book-icon2.png'
import resourcesIcon from '../assets/images/icons/resource.png'
import manageSalesIcon from '../assets/images/icons/growth-icon.png'
import { useState } from 'react'
import { BottombarButton } from './BottombarButton'
export function SubMenu() {
  const [active, setActive] = useState('');
  function toggleToBooks() {
    setActive('books');
  }
  function toggleToResources() {
    setActive('resources');
  }
  function toggleToSales() {
    setActive('sales');
  }

  return (
    <div className='body-sub-menu'>
      <div className='sub-menu-container'>
        <BottombarButton
          to='/warehouse'
          src={bookIcon}
          text='Books in progress'
        />
        <BottombarButton
          to='/'
          src={resourcesIcon}
          text='Resources'
        />
        <BottombarButton
          to='/employees'
          src={manageSalesIcon}
          text='Sales preparation'
        />
      </div>
    </div>
  )
}