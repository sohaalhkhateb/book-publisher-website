import { NarrowView } from './NarrowView';
import { Header } from '../layout/Header';
import { Outlet } from "react-router";
import { Body } from "./Body";
import { SideBar } from "./SideBar";
import { useState } from "react";

export function GuestLayout() {
    const [layoutContext, setLayoutContext] = useState({
        narrowView: true,
        searchBar: false,
        sideBar: false,
    })
    return (
        <>
            <Header exists={layoutContext.searchBar} login={false} />
            <Body>
                {layoutContext.sideBar && <SideBar />}
                <NarrowView layoutContext={layoutContext}>
                    <Outlet context={setLayoutContext} />
                </NarrowView>
            </Body >
        </>
    )
}