import { useId } from 'react'
import './Card.css'

export function Card({ number = null, title = null, subTitle, adition = null,width=10 , color = 'var(--primary)',bgColor='var(--surface)' ,src = null, onClick, fontColor='var(--primary)' }) {
    const cardId = useId();
    return (
        <>
            <style>
                {`
                    #${cardId}{
                        width:${width}vw;
                        background-color: ${bgColor};
                        color: ${fontColor};
                    }
                `}
            </style>
            <div
                className="card-container"
                id={`${cardId}`}
                onClick={onClick}
            >
                <p
                    className="card-number"
                    style={{
                        color: `${color}`
                    }}
                >
                    {number}
                </p>
                <p className="card-title">
                    {title}
                </p>
                <div className="card-section">
                    <p className="card-txt">
                        {subTitle}
                    </p>
                    {
                        (adition || src) &&
                        <div className="card-state-container">
                            {
                                src != null ? <img src={src} className='img-adition' alt="" />
                                    :
                                    <p
                                        className="card-state"
                                        style={{
                                            backgroundColor: `${color}`
                                        }}
                                    >
                                        {adition}
                                    </p>
                            }
                        </div>
                    }

                </div>
            </div>
        </>
    )
}