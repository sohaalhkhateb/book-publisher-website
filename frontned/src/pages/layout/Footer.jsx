export function Footer ({layoutContext}){
    return (
        <div
        style={{
        
            boxShadow:' 0px 4px 20px 2px grey',
            backgroundColor:'#dddddd',
            height:'200px',
            width:layoutContext.sideBar?'calc(100vw - 80px)':'100vw',
           
        }}
        >

        </div>
    )
}