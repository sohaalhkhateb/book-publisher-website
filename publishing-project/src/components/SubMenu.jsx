import './SubMenu.css'
import bookIcon from '../assets/images/icons/books-icon.png'
import resourcesIcon from '../assets/images/icons/resources-icon.png'
import manageSalesIcon from '../assets/images/icons/manage-sales-icon.png'
import { Link, NavLink } from 'react-router'
import { useState } from 'react'
export function SubMenu() {
  const [active , setActive] = useState('');
  function toggleToBooks() {
    setActive('books');
  }
  function toggleToResources() {
    setActive('resources');
  }
  function toggleToSales(){
    setActive('sales');
  }
  
  return (
    <div className='body-sub-menu'>
      <div className='sub-menu-container'>
        <NavLink 
          to='/warehouse' 
          className='sub-menu-section'
        >
          <img
            src={bookIcon}
            className='sub-menu-icon'
            alt="" />
          <p className='sub-menu-paragraph'>
            Books in progress
          </p>
        </NavLink>
        <NavLink 
          to='/' 
          className='sub-menu-section'
        >
          <img
            src={resourcesIcon}
            className='sub-menu-icon'
            alt="" />
          <p className='sub-menu-paragraph'>
            Resources
          </p>
        </NavLink>
        <NavLink 
          to='/employees' 
          className='sub-menu-section'
        >
          <img
            src={manageSalesIcon}
            className='sub-menu-icon'
            alt="" 
          />
          <p className='sub-menu-paragraph'>
            Sales preparation
          </p>
        </NavLink>
      </div>
    </div>
  )
}