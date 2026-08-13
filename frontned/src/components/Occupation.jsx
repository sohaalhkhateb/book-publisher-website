import { useEffect, useId, useState } from "react";
import checkMark from '../assets/images/icons/check-mark.png'
export function Occupation({ occupation, selectedOccupations, setSelectedOccupations }) {

    const [checked, setChecked] = useState(false);
    const devId = useId();

    useEffect(()=>{
        function resolveChecked(){
            if(selectedOccupations.includes(occupation.id))
                setChecked(true)
        }
        resolveChecked()
    },[selectedOccupations])
    
    function handleClick(e) {
        e.stopPropagation()
        setChecked(!checked);
        if (!selectedOccupations.includes(occupation.id) && !checked) {
            let temp = selectedOccupations
            temp.push(occupation.id);
            console.log(temp)
            setSelectedOccupations(temp);
            return null;
        } else {
            let i = selectedOccupations.indexOf(occupation.id);
            let temp = selectedOccupations
            temp.splice(i, 1)
            console.log(temp)
            setSelectedOccupations(temp);
            return null;
        }
    }
    return (
        <>
            <style>
                {`
                #${devId}{
                    border:none;
                    margin:5px 15px;
                    cursor:pointer;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    height:30px;
                    width:max-content;
                    font-weight :bold;
                    color : black ;
                    background-color:${checked ? 'black' : occupation.color}5e;
                    padding : 1px 5px;
                    border-radius:10px;
                    border-bottom:3px solid ${occupation.color};
                    border-top:${checked ? `3px solid ${occupation.color}` : undefined};
                    border-left:${checked ? `3px solid ${occupation.color}` : undefined};
                    border-right:${checked ? `3px solid ${occupation.color}` : undefined};
                    margin-left :4px
                    }
                    #${devId}:hover{
                      animation :0.2s ease-in 0s 1 running coolHover;
                      box-shadow: 0px 0px 1px 4px ${occupation.color};
                       

                    }
                    @keyframes coolHover{
                        from {
                            box-shadow: none;
                            border: none;
                        }
                        to {
                            box-shadow:0px 0px 3px 4px ${occupation.color};
                            
                            }
                    }
                `}
            </style>
            <div onClick={handleClick} style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", height: "fit-content", maxHeight: "40px", width: "fit-content" }}>

                <button id={devId}>
                    {occupation.name}
                </button>
                {checked && (<img src={checkMark} width="30px" style={{ position: "relative", bottom: '20px', cursor: "pointer" }} />)}
            </div>

        </>
    )
}


export function Occupations({ occupations = [], selectedOccupations, setSelectedOccupations, errors }) {
    return (
        <>
            <style>
                {`
                #container-occupations{
                        border: ${errors ? 'red 3px solid' : null};
                        display: grid;
                        grid-template-columns:repeat(auto-fit,minmax(100px,1fr)) ;
                        place-items:center;
                        border-radius:30px;
                        background:var(--shadow);
                        padding:10px 10px;
                        box-shadow: 0px 0px 4px 2px lightgrey;
                    }
                    `}
            </style>

            <div id="container-occupations">
                {occupations.length == 0 ?
                    (<div style={{
                        display: "flex", alignItems: 'center', flexDirection: 'column',
                        borderRadius: '10px', backgroundColor: 'lightblue', padding: '10px 20px',
                        fontStyle: 'italic'
                    }}>
                        <h3 style={{ opacity: 0.6, color: "red" }}>no occupations</h3>
                        <p style={{ opacity: 0.6, color: "red" }}>add one now!</p>
                    </div>
                    )
                    :
                    occupations.map((occupation) => {
                        return (
                            <Occupation
                                key={occupation.id}
                                occupation={occupation}
                                selectedOccupations={selectedOccupations}
                                setSelectedOccupations={setSelectedOccupations}
                            />
                        )
                    })
                }
            </div>
            <div style={{
                textAlign: 'center',
                color: 'red',
                fontStyle: 'oblique',
                fontSize: 20
            }}
            >{errors}</div>

        </>
    )
}