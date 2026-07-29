import { FilterButton } from "./FilterButton";
import './InventorySalesHeader.css'

export function InventorySalesHeader() {
    return (
        <div className="inventory-header-container">
            <div className="inventory-header-right">
                <p className="inventory-header-title">
                    Inventory Sales
                </p>
                <p className="inventory-header-subtitle">
                    Track sales and revenue by period
                </p>
            </div>
            <div className="inventory-header-left">
                <div className="inventory-header-filters-btn">
                    <p className="inventory-header-txt">
                        Filtering by:
                    </p>
                    <FilterButton
                        period='Weekly'
                    />
                    <FilterButton
                        period='Monthly'
                    />
                    <FilterButton
                        period='Yearly'
                    />
                </div>
                <div className="inventory-header-filter">
                    <p className="inventory-header-txt">
                        Last
                    </p>
                    <input
                        type="number"
                        placeholder="Period"
                        className="inventory-header-input"
                    />
                </div>
            </div>
        </div>
    )
}