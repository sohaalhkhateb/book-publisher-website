import { WarehouseCard } from "./WarehouseCard"

export function WarehouseCards({cards}) {
    return (
        <>
            <style>
                {`
                           .summary-cards-container{
                               display: flex;
                               justify-content: space-around;
                           }
                       `}
            </style>
            <div className="summary-cards-container">
                {
                    cards.map((card) => {
                        return (
                            <WarehouseCard
                                key={card.id}
                                card={card}
                            >
                                {card.state ? card.state : null}
                            </WarehouseCard>
                        )
                    })
                }
            </div>
        </>
    )
}