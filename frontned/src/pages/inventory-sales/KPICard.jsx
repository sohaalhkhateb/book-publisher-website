import './KPICard.css'

export function KPICard({ card }) {
    let cardClass = "kpi-card-container ";

    if (card.id === 1) {
        cardClass += card.number > 150
            ? 'card-good'
            :
            (card.number < 30
                ? 'card-risk'
                :
                'card-warning');
    } else if (card.id === 2 ) {
        cardClass += card.number >= 1000
            ? 'card-good'
            : (card.number <200
                ? 'card-risk'
                :
                'card-warning');
    } else if (card.id === 4 || card.id === 3) {
        cardClass += card.number >= 30
            ? 'card-good'
            : (card.number < 10
                ? 'card-risk'
                :
                'card-warning');
    }

    return (
        <div className={cardClass}>
            <p className="kpi-card-number">
                {card.number}
            </p>
            <p className="kpi-card-label">
                {card.label}
            </p>
        </div>
    )
} 