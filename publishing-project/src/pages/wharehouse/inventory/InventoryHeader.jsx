import './InventoryHeader.css'
import notificationIcon from '../../../assets/images/icons/not-icon.png'
import inventoryIcon from '../../../assets/images/icons/storehouse-header.png'

export function  InventoryHeader() {
  return(
    <div className='inventory-header-container'>
      <div className='inventory-header-left-section'>
        <img 
          src={inventoryIcon} 
          alt="" 
          className='inventory-header-icon'
        />
        <p className='inventory-header-title'>The Inventory</p>
      </div>
      <div className='inventory-header-middle-section'>
        <p className='inventory-status-txt'>inventory status:</p> 
        <p className='inventory-status-result'>50% available</p>
      </div>
      <div className='inventory-header-right-section'>
        <button className='inventory-notification-btn'>
        <img 
          src={notificationIcon} 
          alt="" 
          className='inventory-notification-icon'
        />
        <p className='inventory-notification-count'>3</p>
        </button>
      </div>
    </div>
  )
}