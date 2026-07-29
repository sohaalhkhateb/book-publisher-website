import { InventorySalesItem } from "./InventorySalesItem"
import './InventorySalesItems.css'

export function InventorySalesItems({sales, setSelectedSaleId}) {
    return (
        <div className="inventory-sales-items-container">
            {
                sales.map((sale) => {
                    return (
                        <InventorySalesItem
                            key={sale.id}
                            sale={sale}
                            onClick= {() => setSelectedSaleId(sale.id)}
                        />
                    )
                })
            }
        </div>
    )
}