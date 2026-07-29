import './WareHouseHeader.css'
import { Link } from 'react-router'
import notificationIcon from '../../assets/images/icons/notification.png'
import storeHouseicon from '../../assets/images/icons/storehouse-header.png'
export function WhareHousHeader() {
  return (
    <div className="store-header-container">
      <div className='store-header-title'>
        <img
          src={storeHouseicon}
          alt=""
          className='store-header-icon'
        />
        <p className='store-header-txt'>
          StoreHouse
        </p>
      </div>
      <Link to='/storehous' className='manage-link'>
        Manage your notification
      </Link>
      <Link
        to=''
        className='notification-link'
      >
        <img
          src={notificationIcon}
          className='notification-icon'
          alt=""
        />
        <p className='show-notification-txt'>show notification</p>
      </Link>
    </div>
  )
}