import './OfferDetails.css'

export function OfferDetails({offer}) {
    return (
        <div className='offer-details-container'>
            <p className='offer-details-title'>
                {offer.title}
            </p>
            <p className='offer-details-txt'>
                by: {offer.authorName}
            </p>
            <p className='offer-details-txt'>
                genre : {offer.authorName}
            </p>
        </div>
    )
}