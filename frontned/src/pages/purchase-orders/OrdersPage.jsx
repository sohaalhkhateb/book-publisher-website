import { MainMenu } from '../../components/MainMenu'
import { Options } from '../../components/Options'
import { SearchComponent } from '../../components/SearchComponent'
import { SubMenu } from '../../components/SubMenu'
import { Orders } from '../../components/Orders'
import { OrdersHeader } from '../../components/OrdersHeader'
import './OrdersPage.css'
import PageLayout from '../PageLayout'
import { useState } from 'react'
export function OrdersPage({ showOptionList, setShowOptionList, search, setSearch }) {
    function closeShowDetails() {
        setShowOptionList(false);
    }
    return (
        <PageLayout
            headerState='order'
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
        >
            <div className='content-container'>
                {
                    search &&
                    <SearchComponent />
                }
                {
                    !search &&
                    <div className='orders-container'>
                        <Orders
                            title='Purchase Orders:'
                        />
                    </div>
                }
            </div>
        </PageLayout>
    )
}