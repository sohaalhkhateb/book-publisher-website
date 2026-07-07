import './MainMenu.css'
import booksIcon from '../assets/images/icons/book-stack-48.png'
import WareHouseIcon from '../assets/images/icons/barn-48.png'
import employeeIcon from '../assets/images/icons/teamwork.png'
import purchaseIcon from '../assets/images/icons/purchase-order-48.png'
import saleIcon from '../assets/images/icons/sales-order.png'
import alarmIcon from '../assets/images/icons/appointment-reminders-48.png'
import { NavLink } from 'react-router'
import { useState } from 'react'
import { SidebarButton } from './SidebarButton'
export function MainMenu({ setShowMainContent, showMainContent }) {

  return (
    <div className='main-menu-container'>
      <SidebarButton
        to='/'
        src={booksIcon}
        text='Books'
      />
      <SidebarButton
        to='/wareHouse'
        src={WareHouseIcon}
        text='WareHouse'
      />
      <SidebarButton
        to='/employees'
        src={employeeIcon}
        text='Manage Employees'
      />
      <SidebarButton
        to='/purchase-orders'
        src={purchaseIcon}
        text='Purchase Orders'
      />
      <SidebarButton
        to='/sales-orders'
        src={saleIcon}
        text='Sales Orders'
      />
      <SidebarButton
        to='/notifications'
        src={alarmIcon}
        text='Notificatios'
      />
    </div>
  )
}