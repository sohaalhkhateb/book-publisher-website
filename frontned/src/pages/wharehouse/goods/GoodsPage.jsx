import PageLayout from "../../PageLayout";
import {goods} from '../../../backend-json/goods'
import {cards} from '../../../backend-json/warehouseCards'
import './GoodsPage.css'
import { WarehouseTable } from "../../../components/WarehouseTable";
import { WarehouseCards } from "../../../components/WarehouseCards";

export function GoodsPage({ showOptionList, setShowOptionList, search, setSearch }) {
    return (
        <PageLayout
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
            headerState="goods"
        >
            <div className="goods-container content-container">
                <WarehouseCards
                     cards={cards}
                />
                <WarehouseTable
                    items={goods}
                />
            </div>
        </PageLayout>
    )
}