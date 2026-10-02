export function Footer ({layoutContext}){
    return (
        <div
        style={{
        
            boxShadow:' 0px 4px 20px 2px grey',
            backgroundColor:'#dddddd',
            height:'200px',
            width:layoutContext.sideBar?'calc(100vw - 80px)':'100vw',
           display:"flex",
           flexDirection:"column",
           alignItems:"center",
           justifyContent:"space-around"
        }}
        >
            <p>for contact : 000 000-0000</p>
            <p>created by sam and soha</p>
            <p>samaha ™ all rights recieved</p>

        </div>
    )
}