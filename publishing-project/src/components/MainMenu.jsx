import './MainMenu.css'
import booksIcon from '../assets/images/icons/books-icon.png'
import WareHouseIcon from '../assets/images/icons/storehouse-icon.png'
import employeeIcon from '../assets/images/icons/employee-icon.png'
import purchaseIcon from '../assets/images/icons/purchase-icon.png'
import saleIcon from '../assets/images/icons/sale-icon.png'
import alarmIcon from '../assets/images/icons/alarm-icon.png'
import { Link, NavLink } from 'react-router'
import { useState } from 'react'
export function MainMenu({ setShowMainContent, showMainContent }) {

  return (
    <div className='main-menu-container'>
      <NavLink
        to='/'
        className='main-menu-sub-container'
      >
        <img
          src={booksIcon}
          className='main-icon'
          alt=""
        />
        <p className='main-paragraph'>
          Books
        </p>
      </NavLink>
      <NavLink
        to='/wareHouse'
        className='main-menu-sub-container'
      >
        <img
          src={WareHouseIcon}
          className='main-icon'
          alt=""
        />
        <p className='main-paragraph'>
          WareHouse
        </p>
      </NavLink>
      <NavLink
        to='/employees'
        className='main-menu-sub-container'
      >
        <img
          src={employeeIcon}
          className='main-icon'
          alt="" />
        <p className='main-paragraph'>
          Manage Employees
        </p>
      </NavLink>
      <NavLink
        to='/orders'
        className='main-menu-sub-container'
      >
        <img
          src={purchaseIcon}
          className='main-icon'
          alt="" />
        <p className='main-paragraph'>
          Purchase Orders
        </p>
      </NavLink>
      <NavLink
        to='/sales'
        className='main-menu-sub-container'
      >
        <img
          src={saleIcon}
          className='main-icon'
          alt="" />
        <p className='main-paragraph'>
          Sales Orders
        </p>
      </NavLink>
      <NavLink
        to='/notifications'
        className='main-menu-sub-container'
      >
        <img
          src={alarmIcon}
          className='alarm-icon'
          alt=""
        />
        <p className='main-paragraph'>
          Notificatios
        </p>
      </NavLink>

    </div>
  )
}