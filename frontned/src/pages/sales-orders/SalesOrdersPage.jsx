import { MainMenu } from '../../components/MainMenu'
import { Options } from '../../components/Options'
import { Orders } from '../../components/Orders'
import { OrdersHeader } from '../../components/OrdersHeader'
import { SearchComponent } from '../../components/SearchComponent'
import { SubMenu } from '../../components/SubMenu'
import PageLayout from '../PageLayout'
import './SalesOrderPage.css'


export function SalesOrderPage({ showOptionList, setShowOptionList, search, setSearch }) {

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
                            title='Sales Orders:'
                        />
                    </div>
                }
            </div>
        </PageLayout>
    )
}