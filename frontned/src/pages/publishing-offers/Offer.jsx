import './Offer.css'

export function Offer({ offer, project, onClick, handleOpenProject, handleAcceptOffer }) {

    const acceptOffer = () => {
        const newProject = {
            id: Date.now(),
            offerId: offer.id,
            title: offer.title,
            authorName: offer.authorName,
            status: "in-production",
            priority: "normal",
            dueDate: new Date(new Date().setMonth(new Date().getMonth() + 4)
            ).toISOString()
                .slice(0, 10),
            createdAt: new Date().toISOString().slice(0, 10),
            files: [
                {
                    name: "Manuscript v1",
                    url: offer.manuscriptUrl,
                    type:  "manuscript",
                    uploadedAt: offer.receivedAt
                }
            ],
            tasks: []
        };
        handleAcceptOffer(offer.id, newProject);
    }
    return (
        <div className="offer-container">
            <p className="offer-title">
                {offer.title}
            </p>
            <p className={`offer-status offer-${offer.status}`}>
                {offer.status}
            </p>
            <p className="offer-txt">
                {offer.authorName} • {offer.genre} • {offer.language}
            </p>
            <p className="offer-desc">
                {offer.description}
            </p>
            <div className="offer-btns">
                <button
                    className="offer-view-btn"
                    onClick={onClick}
                >
                    View
                </button>
                {
                    offer.status === "new" || offer.status === "reviewed" ? (
                        <>
                            <button
                                className="offer-btn"
                                onClick={acceptOffer}
                            >
                                Accept
                            </button>
                            <button
                                className="offer-btn"
                                onClick={() => {
                                    alert("Reject offer: " + offer.title);
                                }}
                            >
                                Reject
                            </button>
                        </>

                    )
                        :
                        offer.status === "accepted" ? (
                            <button
                                className="offer-btn"
                                onClick={() => handleOpenProject(project.id)}
                            >
                                Open Project
                            </button>
                        ) :
                            null
                }

            </div>
        </div>
    )
}