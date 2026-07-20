import { Header } from "../../components/Header";
import { MainMenu } from "../../components/MainMenu";
import { Options } from "../../components/Options";
import { SubMenu } from "../../components/SubMenu";

export default function PageLayout({ children,showOptionList,setShowOptionList,setHomeProducts,searchBooks,setSearchBooks, closeShowDetails ,setUser}) {
    return (
        <div className='home-page-container container'
            onClick={closeShowDetails}    
        >
            <Header
                setUser={setUser}
                showOptionList={showOptionList}
                setShowOptionList={setShowOptionList}
                setHomeProducts={setHomeProducts}
                searchBooks={searchBooks}
                setSearchBooks={setSearchBooks}
            />
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




  