import { NavLink } from 'react-router'
import booksIcon from '../../assets/images/icons/book-stack-48.png'
import WareHouseIcon from '../../assets/images/icons/barn-48.png'
import employeeIcon from '../../assets/images/icons/teamwork.png'
import taskIcon from '../../assets/images/icons/book-16-48.png'
import purchaseIcon from '../../assets/images/icons/purchase-order-48.png'
import saleIcon from '../../assets/images/icons/sales-order.png'
export function SideBar({ context }) {
  return (
    <div
      style={{
        height: 'calc(100vh - 60px)',
        width: '80px',
        backgroundColor: 'var(--primary)',
        position: 'sticky',
        top: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow:'hidden'
      }}>

      <SidebarButton
        to='/'
        src={booksIcon}
        text='Books'
      />
      <SidebarButton
        to='/resources'
        src={WareHouseIcon}
        text='WareHouse'
      />
      <SidebarButton
        to='/tasks'
        src={taskIcon}
        text='tasks'
      />
      <SidebarButton
        to='/employees'
        src={employeeIcon}
        text='employees'
      />
      <SidebarButton
        to='/orders'
        src={purchaseIcon}
        text='orders'
      />
      <SidebarButton
        to='/sales'
        src={saleIcon}
        text='sales'
      />
    </div>
  )
}




function SidebarButton({ to, src, text }) {
  return (
    <>
      <style>
        {`
                .sidebar-btn-container{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    color: var(--text-muted);
                    padding: 10px;
                    width: 100%;
                }
                .sidebar-btn-icon{
                    height: 30px;
                }
                .sidebar-btn-text{
                    margin: 0px;
                    font-size:13px;
                    align-self: center;
                }
                .sidebar-btn-container.active{
                    text-decoration: underline;
                    color: var(--accent); 
                }
                `}
      </style>
      <NavLink
        to={to}
        className='sidebar-btn-container'
      >
        <img
          src={src}
          className='sidebar-btn-icon'
          alt=""
        />
        <p className='sidebar-btn-text'>
          {text}
        </p>
      </NavLink>
    </>
  )
}