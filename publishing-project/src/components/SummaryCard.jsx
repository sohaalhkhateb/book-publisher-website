import { useState } from 'react'
import './SummaryCard.css'

export function SummaryCard({ children, card }) {
    let cardClass = 'summary-card-container ';

    if (card.id ===1) {
        cardClass += card.number > 0.7 * card.total 
        ? 'card-good' 
        :
        (card.number < 0.3 * card.total 
        ? 'card-risk'
        : 
        'card-warning');
    } else if (card.id === 2 || card.id === 3) {
        cardClass += card.number >= 3
        ? 'card-good'
        : 'card-risk';
    } else if (card.id === 4) {
        cardClass += card.number <= 0.7 * card.total
        ? 'card-good'
        : 'card-warning';
    }
    return (
        <div className={cardClass}>
            <p className={
                card.state == 'LOW'
                    ?
                    "summary-card-number summary-number-yellow"
                    :
                    (card.state == 'OUT'
                        ?
                        "summary-card-number summary-number-red"
                        :
                        "summary-card-number")
            }>
                {card.number} {card.unit}
            </p>
            <p className="summary-card-title">
                {card.title}
            </p>

            <div className="summary-card-section">
                <p className="summary-card-txt">
                    {card.details}
                </p>
                {
                    children ?
                        <div className='summary-state-container'>
                            <p className={card.state == 'LOW' ? 'summary-state-low' : 'summary-state-out'}>
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