import { useId } from 'react'
import './InfoCard.css'

export function InfoCard({ title = null, subtitle, width=20, color='white'}) {
    const infoCardId = useId();
    return (<>
        <style>
            {`
                #${infoCardId}{
                    width:${width}vw;
                    background-color:${color};
                    }
                    `}
        </style>
        <div  id={`${infoCardId}`} className='info-card-container'>
            {title != null && <p className="info-card-title">{title}</p>}
            <p className="info-card-subtitle">•{subtitle}</p>
        </div>
    </>
    )
}