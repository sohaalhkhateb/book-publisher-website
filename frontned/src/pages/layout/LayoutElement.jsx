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
    sideBar: true,
    bodyHeader: ''
  })

  return (
    <>
      <Header exists={layoutContext.searchBar} />
      <Body>
        {layoutContext.sideBar && <SideBar />}
        <NarrowView layoutContext={layoutContext}>
          <p
            style={{
              color:'white',
              fontSize: '30px',
              fontStyle: 'italic',
              fontWeight: 'bold',
              background: "linear-gradient(to left, #0000ff58 , #2c84d0cf)",
              margin: '10px 10px',
              borderRadius: '10px',
              paddingLeft: '30px',
              paddingRight: '30px',
              borderBottom: '3px solid #0d5982',
              width:'max-content'
            }}
          >{layoutContext.bodyHeader}</p>
          <Outlet context={setLayoutContext} />
        </NarrowView>
      </Body >
    </>
  )
}



