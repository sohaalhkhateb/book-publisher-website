import { Offer } from "./Offer"
import './Offers.css'
export function Offers({filtered, projects, setSelectedOfferId, handleOpenProject, handleAcceptOffer}) {
    return (
        <div className="offers-container">
            {
                filtered.map((offer) => {
                    const project =
                        offer.projectId &&
                        projects.find((p) => p.id === offer.projectId);
                    return (
                        <Offer
                            key={offer.id}
                            offer={offer}
                            project={project}
                            handleOpenProject={handleOpenProject}
                            handleAcceptOffer={handleAcceptOffer}
                            onClick = {() => setSelectedOfferId(offer.id)}
                        />
                    )
                })
            }
        </div>
    )
}