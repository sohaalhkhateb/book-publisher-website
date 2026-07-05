import { MainMenu } from '../../components/MainMenu'
import { Options } from '../../components/Options'
import { OrdersHeader } from '../../components/OrdersHeader'
import { SearchComponent } from '../../components/SearchComponent'
import { SubMenu } from '../../components/SubMenu'
import './SalesOrderPage.css'
import { SalesOrders } from './SalesOrders'


export function SalesOrderPage({ showOptionList, setShowOptionList, search, setSearch }) {

    function closeShowDetails() {
        setShowOptionList(false);
    }

    return (
        <div
            className="container"
            onClick={closeShowDetails}
        >
            <OrdersHeader
                showOptionList={showOptionList}
                setShowOptionList={setShowOptionList}
                search={search}
                setSearch={setSearch}
            />
            <Options
                showOptionList={showOptionList}
                setShowOptionList={setShowOptionList}
            />
            <MainMenu />
            <div className='content-container'>
                {
                    search &&
                    <SearchComponent />
                }
                {
                    !search &&
                    <div className='orders-container'>
                        <SalesOrders />
                    </div>
                }
            </div>
            <SubMenu />
        </div>
    )
}