import './SaleComponent.css'

export function SaleComponent({ order, onClock }) {
    return (
        <div className="sale-component">
            {order?.final_price_in_cents && (
                <span className='order-view-label'>
                    Final price:
                    <span className='order-view-val'>
                        {order.final_price_in_cents}
                    </span>
                </span>
            )}
            {order?.arrival_date && (
                <span className='order-view-label'>
                    Arrival date:
                    <span className='order-view-val'>
                        {order.arrival_date}
                    </span>
                </span>
            )}
            {order?.items && (
                <span className='order-view-label'>
                    Number of items:
                    <span className='order-view-val'>
                        {order.items.length}
                    </span>
                </span>
            )}
            {order?.email && (
                <span className='order-view-label'>
                    Email:
                    <span className='order-view-val'>
                        {order.email}
                    </span>
                </span>
            )}
            {order?.phone_number && (
                <span className='order-view-label'>
                    Phone number: 
                    <span className='order-view-val'>
                        {order.phone_number}
                    </span>
                </span>
            )}
            {order?.address && (
                <span className='order-view-label'>
                    Address: 
                    <span className='order-view-val'>
                        {order.address}
                    </span>
                </span>
              )}
              {order?.contacts && (
                <span className='order-view-label'>
                    Contacts: 
                    <span className='order-view-val'>
                        {order.contacts}
                    </span>
                </span>
              )}
        </div>
    )
}