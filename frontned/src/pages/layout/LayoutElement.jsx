import { Outlet } from "react-router";
import { Header } from "./Header";
import { MainMenu } from "../../components/MainMenu";
import { SubMenu } from "../../components/SubMenu";
import { Options } from "../../components/Options";
import { useState } from "react";

export function LayoutElement() {
    const [showOptionList, setShowOptionList] = useState(false);
    return (
    <>
        <Header
            setShowOptionList={setShowOptionList}
            showOptionList={showOptionList}
        />
        <div className='home-page-container container'
            onClick={() =>
                setShowOptionList(false)
            }>

            <Options
                showOptionList={showOptionList}
                setShowOptionList={setShowOptionList}
            />
            <MainMenu />
            <Outlet />
            <SubMenu />
        </ div>
    </>
    )
}