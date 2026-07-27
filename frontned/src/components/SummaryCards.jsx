import { SummaryCard } from "./SummaryCard"

export function SummaryCards({cards}) {
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
                            <SummaryCard
                                key={card.id}
                                card={card}
                            >
                                {card.state ? card.state : null}
                            </SummaryCard>
                        )
                    })
                }
            </div>
        </>
    )
}