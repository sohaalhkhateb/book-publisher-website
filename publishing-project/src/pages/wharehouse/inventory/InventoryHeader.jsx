import './InventoryHeader.css'
import notificationIcon from '../../../assets/images/icons/not-icon.png'
import inventoryIcon from '../../../assets/images/icons/storehouse-header.png'

export function  InventoryHeader() {
  return(
    <div className='inventory-header-container'>
      <div className='inventory-header-right'>
          <p className='inventory-header-title'>
              INVENTORY
          </p>
          <p className='inventory-header-txt'>
            Publishing House Admin | Manage Paper, Supplies & Book Stock
          </p>
      </div>
    </div>
  )
}