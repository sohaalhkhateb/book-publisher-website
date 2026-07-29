import { InventorySalesHeader } from "./InventorySalesHeader";
import { KPICard } from "./KPICard";
import './InventorySalesPage.css'
import PageLayout from "../PageLayout";
import { cards } from '../../backend-json/kpiCards'
import { KPICards } from "./KPICards";
import { sales } from '../../backend-json/inventorySales'
import { InventorySalesItems } from "./InventorySalesItems";
import { useState } from "react";
import { InventorySaleDetails } from "./InventorySaleDetails";

export function InventorySalesPage({ showOptionList, setShowOptionList, search, setSearch }) {
    const [selectedSaleId, setSelectedSaleId] = useState(null);

    const selectSale = sales.find((sale) =>
        sale.id === selectedSaleId);
    return (
        <PageLayout
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
            headerState="inventory-sales"
        >
            {
                selectSale ?
                    (
                        <InventorySaleDetails
                            sale={selectSale}
                            onClose={() => setSelectedSaleId(null)}
                        />
                    )
                    :
                    (
                        <div className="inventory-sales-container content-container">
                            <KPICards
                                cards={cards}
                            />
                            <InventorySalesItems
                                sales={sales}
                                setSelectedSaleId={setSelectedSaleId}
                            />
                        </div>
                    )
            }

        </PageLayout>
    )
}