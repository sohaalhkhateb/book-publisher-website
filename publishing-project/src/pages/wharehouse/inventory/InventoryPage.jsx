import './InventoryPage.css'
import { InventoryHeader } from './InventoryHeader'
import { useState } from 'react'
import PageLayout from '../../PageLayout'
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
          
      </div>
    </PageLayout>
  )
}