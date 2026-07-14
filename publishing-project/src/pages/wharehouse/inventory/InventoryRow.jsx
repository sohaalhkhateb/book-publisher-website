import './InventoryRow.css'

export function InventoryRow() {
    return (
        <div className="inventory-row-container">
            <p className="inventory-row-txt">
                Premium Gloss Book Paper
            </p>
            <p className="inventory-row-txt">
                Paper Stock
            </p>
            <p className="inventory-row-txt">
                125
            </p>
            <p className="inventory-row-txt">
                50
            </p>
            <p className="inventory-row-txt">
                Nava Paper Co.
            </p>
            <p className="inventory-row-states">
                IN STOCK
            </p>
        </div>
    )
}