import { ResourcesCard } from "./ResourcesCard"

export function ResourcesCards({ resources }) {
    return (
        <>
            <style>
                {`
                    .resources-cards-container{
                        display: flex;
                        flex-direction: column;
                        gap: 30px;
                    }
                `}
            </style>
            <div className="resources-cards-container">
                {
                    resources.map((resource) => {
                        return (
                            <ResourcesCard
                                key={resource.id}
                                resource={resource}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}