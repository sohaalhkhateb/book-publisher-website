import './PublishingOffersPage.css'
import PageLayout from "../PageLayout";
import { Offers } from "./Offers";
import { offers } from '../../backend-json/offers'
import { projects } from '../../backend-json/projects'
import { useMemo, useState } from "react";
export function PublishingOffersPage({ showOptionList, setShowOptionList, search, setSearch }) {
    const [selectedOfferId, setSelectedOfferId] = useState(null);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [statusFilter, setStatusFilter] = useState("all");
    const [activeTab, setActiveTab] = useState("offers"); // "offers" | "projects"

    const handleAcceptOffer = (offerId, newProject) => {
        console.log("Accept offer", offerId, "create project", newProject);
    }
    const handleOpenProject = (projectId) => {
        setSelectedProjectId(projectId);
        setActiveTab("projects");
    }

    const filtered = useMemo(() => {
        if (statusFilter === "all") return offers;
        return offers.filter((o) => o.status ===
            statusFilter);
    }, [offers, statusFilter]);

    const selectOffer = offers.find((offer) =>
        offer.id === selectedOfferId);
    return (
        <PageLayout
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
            headerState="offers"
        >
            <div className="publishing-offers-container content-container">
                <div className="filters-section">
                    <p className="select-filters-label">
                        Status :
                    </p>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className='select-filters'
                        name=""
                        id=""
                    >
                        <option
                            value="all"
                        >
                            All
                        </option>
                        <option
                            value="new"
                        >
                            New
                        </option>
                        <option
                            value="reviewed"
                        >
                            Reviewed
                        </option>
                        <option
                            value="accepted"
                        >
                            Accepted
                        </option>
                        <option
                            value="rejected"
                        >
                            Rejected
                        </option>
                    </select>
                </div>
                {
                    activeTab === "offers" ? (
                        <Offers
                            filtered={filtered}
                            projects={projects}
                            setSelectedOfferId={setSelectedOfferId}
                            handleOpenProject={handleOpenProject}
                            handleAcceptOffer={handleAcceptOffer}
                        />
                    ) : (
                        null
                    )
                }

            </div>
        </PageLayout>
    )
}