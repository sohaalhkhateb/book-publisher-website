import './WarehouseCard.css'

export function WarehouseCard({ children, card }) {
    return (
        <div className='warehouse-card-container'>
            <p className={
                card.state == 'LOW'
                    ?
                    "warehouse-card-number warehouse-number-yellow"
                    :
                    (card.state == 'OUT'
                        ?
                        "warehouse-card-number warehouse-number-red"
                        :
                        "warehouse-card-number")
            }>
                {card.number} {card.unit}
            </p>
            <p className="warehouse-card-title">
                {card.title}
            </p>

            <div className="warehouse-card-section">
                <p className="warehouse-card-txt">
                    {card.details}
                </p>
                {
                    children ?
                        <div className='warehouse-state-container'>
                            <p className={card.state == 'LOW' ? 'warehouse-state-low' : 'warehouse-state-out'}>
                                {children}
                            </p>
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}