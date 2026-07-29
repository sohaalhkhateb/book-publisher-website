import './InventorySalesItem.css'

export function InventorySalesItem({sale, onClick}) {
    return (
        <div className="inventory-sales-item-container">
            <div className="inventory-sales-item-info">
                <p className="inventory-sales-item-title">
                    book name: {sale.title}
                </p>
                <p className="inventory-sales-item-txt">
                    unitPrice : {sale.unitPrice} {sale.currency}
                </p>
                <p className="inventory-sales-item-txt">
                    copiesSold : {sale.copiesSold}
                </p>
                <p className="inventory-sales-item-txt">
                    revenue : {sale.revenue}
                </p>
                <p className="inventory-sales-item-txt">
                    stockLeft : {sale.stockLeft}
                </p>
                <p className="inventory-sales-item-txt">
                    status: {sale.status}
                </p>
            </div>
            <button 
                className="inventory-sales-item-btn"
                onClick={onClick}
            >
                Details
            </button>
        </div>
    )
}