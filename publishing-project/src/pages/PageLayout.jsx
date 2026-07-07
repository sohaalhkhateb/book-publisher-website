import { Header } from "../components/Header";
import { MainMenu } from "../components/MainMenu";
import { Options } from "../components/Options";
import { OrdersHeader } from "../components/OrdersHeader";
import { SubMenu } from "../components/SubMenu";

export default function PageLayout({ children, headerState, showOptionList, setShowOptionList, search, setSearch }) {
    function closeShowDetails() {
        setShowOptionList(false);
    }
    return (
        <div className='home-page-container container'
            onClick={closeShowDetails}
        >
            {
                headerState == 'order' ?
                    <OrdersHeader
                        showOptionList={showOptionList}
                        setShowOptionList={setShowOptionList}
                        search={search}
                        setSearch={setSearch}
                    />
                    :
                    <Header
                        showOptionList={showOptionList}
                        setShowOptionList={setShowOptionList}
                        search={search}
                        setSearch={setSearch}
                    />
            }

            <Options
                showOptionList={showOptionList}
                setShowOptionList={setShowOptionList}
            />
            <MainMenu />
            {children}
            <SubMenu />

        </div>
    )
}




