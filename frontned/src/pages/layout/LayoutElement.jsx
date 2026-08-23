import { Outlet } from "react-router";
import { NarrowView } from "./NarrowView";
import { Body } from "./Body";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { useState } from "react";

export function LayoutElement() {

  const [layoutContext, setLayoutContext] = useState({
    narrowView: true,
    searchBar: true,
    sideBar: true
  })

  return (
    <>
      <Header exists={layoutContext.searchBar} />
      <Body>
        {layoutContext.sideBar && <SideBar />}
        <NarrowView layoutContext={layoutContext}>
          <Outlet context={setLayoutContext} />
        </NarrowView>
      </Body>
    </>
  )
}



