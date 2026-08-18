import './OrderComponent.css'

export function OrderComponent({order,onClick=null}) {
    return (
        <div className="order-contant"
            onClick={onClick}
        >
            <span className='order-label'>
                order number:
                <span className='order-val'>
                    {order.id}
                </span>
            </span>
            <span className='order-label'>
                status:
                <span 
                   className='order-val'
                   style={{
                    backgroundColor: order.status == 'accepted' ? '#0ff0005e' : order.status == 'pending' ? '#f0b000d3' : order.status == 'cancelled' ? '#ff00005e' : '#6d6969ab',
                    borderRadius: '20px',
                    width: 'max-content',
                    padding: '2px',
                    fontWeight: '600'
                   }}
                >
                    {order.status}
                </span>
            </span>
            <span className='order-label'>
                payment:
                <span className='order-val'>
                    {order.payment}
                </span>
            </span>
            <span className='order-label'>
                items:
                <span className='order-val'>
                    {order.order_items?.length ?? 0}
                </span>
            </span>
            <span className='order-label'>
                recieved in:
                <span className='order-val'>
                    2{order.created_at.slice(1,10)}
                </span>
            </span>
        </div>
    )
}