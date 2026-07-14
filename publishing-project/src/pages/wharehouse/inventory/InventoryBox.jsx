import './InventoryBox.css'
export function InventoryBox({children, box}) {
    return (
        <div className="inventory-box-container">
            <p className="inventory-box-title">
                {box.title}
            </p>
            <p className={box.state == 'LOW'? "inventory-box-number inventory-number-yellow" : "inventory-box-number inventory-number-red"}>
                {box.number}
            </p>
            <div className="inventory-box-section">
                <p className="inventory-box-txt">
                    {box.datails}
                </p>
                <p className={box.state == 'LOW' ? 'inventory-state-low' : 'inventory-state-out'}>
                    {box.state}
                </p>
            </div>
        </div>
    )
}