import { MainMenu } from '../../components/MainMenu'
import { Options } from '../../components/Options'
import { SearchComponent } from '../../components/SearchComponent'
import { SubMenu } from '../../components/SubMenu'
import { Orders } from './Orders'
import { OrdersHeader } from '../../components/OrdersHeader'
import './OrdersPage.css'
export function OrdersPage({ showOptionList, setShowOptionList, search, setSearch }) {
    
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
                    <SearchComponent/>
                }
                {
                    !search &&
                    <div className='orders-container'>
                        <Orders />
                    </div>
                }
            </div>
            <SubMenu />
        </div>
    )
}