import './InventoryPage.css'
import { useState } from 'react'
import PageLayout from '../../PageLayout'
import { inventoryItems } from '../../../backend-json/inventoryItems'
import { WarehouseTable } from '../../../components/WarehouseTable'
import {cards} from '../../../backend-json/warehouseCards'
import { WarehouseCards } from '../../../components/WarehouseCards'
export function InventoryPage({ showOptionList, setShowOptionList, search, setSearch }) {

  return (
    <PageLayout
      showOptionList={showOptionList}
      setShowOptionList={setShowOptionList}
      search={search}
      setSearch={setSearch}
      headerState="inventory"
    >
      <div className='inventory-container content-container'>
        <WarehouseCards
          cards={cards}
        />
        <WarehouseTable
          items={inventoryItems}
        />
      </div>
    </PageLayout>
  )
}