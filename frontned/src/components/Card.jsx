import './Card.css'

export function Card({ number, title, subTitle, adition = null, color = 'var(--primary)', onClick }) {
    return (
        <div 
            className="card-container"
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
                    adition &&
                    <div className="card-state-container">
                        <p
                            className="card-state"
                            style={{
                                backgroundColor: `${color}`
                            }}
                        >
                            {adition}
                        </p>
                    </div>
                }

            </div>
        </div>
    )
}