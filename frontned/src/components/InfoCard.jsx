import { useId } from 'react'
import './InfoCard.css'

export function InfoCard({ title = null, subtitle, width=20, color='white', border='var(--border)', padding='5px'}) {
    const infoCardId = useId();
    return (<>
        <style>
            {`
                #${infoCardId}{
                    width:${width}vw;
                    background-color:${color};
                    border: 1px solid ${border};
                    padding: ${padding};
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