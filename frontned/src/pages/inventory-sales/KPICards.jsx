import { KPICard } from "./KPICard"

export function KPICards({ cards }) {
    return (
        <>
            <style>
                {`
                    .kpi-cards-container{
                        display: flex;
                        justify-content: space-around;
                    }
                `}
            </style>
            <div className="kpi-cards-container">
                {
                    cards.map((card) => {
                        return (
                            <KPICard
                                key={card.id}
                                card={card}
                            >
                                {card.state ? card.state : null}
                            </KPICard>
                        )
                    })
                }
            </div>
        </>
    )
}