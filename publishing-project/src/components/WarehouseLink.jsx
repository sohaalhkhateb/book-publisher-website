import { NavLink } from "react-router"

export function WarehouseLink({ to, title, details, secificClass }) {
    return (
        <>
            <style>
                {`
                    .sub-warehouse-container{
                        border-radius: 10px;
                        display: flex;
                        flex-direction: column;
                        align-items: self-start;
                        cursor: pointer;
                        border: 1px solid var(--primary);
                        text-decoration: none;
                    }
                    .title {
                        font-size: 50px;
                        font-weight: bold;
                        margin: 0px;
                    }
                    .details {
                        font-size: 20px;
                        margin: 0px;
                    }
                    .sub-warehouse-container:hover {
                        background-color: var(--primary);
                        color: var(--text-muted);
                    }
                     .inventory {
                        grid-area: inventory;
                        background-color: var(--background);
                        color:var(--primary);
                        height: 100%;
                        width: 100%;
                    }              
                    .finished-books {
                        grid-area: finished;
                        background-color: var(--primary);
                        color: var(--text-muted);
                        height: 100%;
                        width: 100%;
                    }
                    .books-in-progress {
                        grid-area: progres;
                        background-color: var(--primary);
                        color: var(--text-muted);
                        height: 100%;
                        width: 100%;
                    }
                    .review {
                        grid-area: review;
                        background-color: var(--background);
                        color:var(--primary);
                        height: 100%;
                        width: 100%;
                    }
                    .goods {
                        grid-area: goods;
                        background-color: var(--primary);
                        color: var(--text-muted);
                        height: 100%;
                        width: 100%;
                    }  
                    .samples{
                        grid-area: samples;
                        background-color: var(--background);
                        color:var(--primary);
                        height: 100%;
                        width: 100%;
                    }
                    .ebooks{
                        grid-area: ebooks;
                        background-color: var(--background);
                        color:var(--primary);
                        height: 100%;
                        width: 100%;
                    } 
                    .not-solid{
                        grid-area: notSolid;
                        background-color: var(--background);
                        color:var(--primary);
                        height: 100%;
                        width: 100%;
                    }
                    .books-in-progress:hover,.finished-books:hover,.goods:hover{
                        background-color: var(--background);
                        color: var(--primary);
                    }
                `}
            </style>
            <NavLink
                to={to}
                className={`${secificClass} sub-warehouse-container`}
            >
                <p className="title">
                    {title}
                </p>
                <p className="details">
                    {details}
                </p>
            </NavLink>
        </>
    )
}