import warning from '../assets/images/icons/warning.png'
export default function EmptyPage({ type }) {
    return (
        <>
            <div
                style={{
                    height: 'calc(100vh - 60px)',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    gap:'40px',
                    
                    

                }}
            >
                <div
                    style={{
                        marginBottom:'30px'
                    }}
                >
                    <h1
                        style={{
                            color:'red',
                            textDecoration:'underline'
                        }}
                    >Sorry!!</h1>
                    <p
                        style={{
                            color:'#0b11be97',
                            fontStyle:'italic',
                            fontWeight:'bolder',
                            fontSize:'20px'
                        }}
                    >{`there are no ${type}s in this page`}</p>
                </div>

                <img src={warning} alt="" width='80px' />
            </div>
        </>
    )
}