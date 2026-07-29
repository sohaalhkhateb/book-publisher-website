import './InventorySaleDetails.css'
import closeIcon from '../../assets/images/icons/close-blue.png'

export function InventorySaleDetails({sale, onClose}) {
    return (
        <div className="inventory-sale-details-container content-container">
            <img 
                src={closeIcon}
                className='close-icon-sale' 
                alt=""
                onClick={onClose}
            />
            <p className="inventory-sale-details-title">
                {sale.title}
            </p>
            <p className="inventory-sale-details-txt">
                author: {sale.author}
            </p>
            <p className="inventory-sale-details-txt">
                category: {sale.category}
            </p>
            <p className="inventory-sale-details-txt">
                unitPrice: {sale.unitPrice} {sale.currency}
            </p>
            <p className="inventory-sale-details-txt">
                copiesSold: {sale.copiesSold}
            </p>
            <p className="inventory-sale-details-txt">
                revenue: {sale.revenue}
            </p>
            <p className="inventory-sale-details-txt">
                stockLeft: {sale.stockLeft}
            </p>
            <p className="inventory-sale-details-txt">
               status: {sale.status} 
            </p>
            <p className="inventory-sale-details-txt">
                revenue: {sale.revenue}
            </p>
            <p className="inventory-sale-details-txt">
                lastSaleDate: {sale.lastSaleDate}
            </p>
            <p className="inventory-sale-details-txt">
                salesGrowth: {sale.salesGrowth}
            </p>
        </div>
    )
}