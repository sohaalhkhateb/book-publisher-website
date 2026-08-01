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
            <Options
                showOptionList={showOptionList}
                setShowOptionList={setShowOptionList}
            />
            <MainMenu />
            <Outlet />
            <SubMenu />

        </>
    )
}