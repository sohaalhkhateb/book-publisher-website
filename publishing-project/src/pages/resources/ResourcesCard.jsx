import './ResourcesCard.css'
import factoryIcon from '../../assets/images/icons/box.png'
import statusIcon from '../../assets/images/icons/status.png'
import warningIcon from '../../assets/images/icons/warning.png'
import checkMark from '../../assets/images/icons/check-mark.png'
import plugIcon from '../../assets/images/icons/power.png'
import truckIcon from '../../assets/images/icons/delivery.png'
import gearIcon from '../../assets/images/icons/gears.png'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { NavLink } from 'react-router'

export function ResourcesCard({ resource }) {
    const [showDetails, setShowDetails] = useState(false);
    let statusClass = 'resources-card-status ';
    let IconSrc = factoryIcon;

    IconSrc = resource.type === "Production"
        ? gearIcon 
        :
        (
            resource.type === "Logistics"
                ? truckIcon
                :
            resource.type === "Digital"
            ?
            plugIcon
            :
            factoryIcon
        );

    statusClass += resource.status === "active"
        ? 'status-active'
        :
        (
            resource.status === "delayed"
                ? 'status-delayed'
                :
                (
                    resource.status === "at-risk"
                        ? 'status-at-risk'
                        :
                        "status-down"
                )
        );

    const onClickContactBtn = () => {
        console.log('k')
        setShowDetails(!showDetails);
    }
    return (
        <div className="resources-card-container">
            {/* // This row instantly tells the user what this resource is and how healthy it is right now. */}
            <div className="resources-card-row1">
                <div className="row1-left">
                    <img
                        src={IconSrc}
                        className='resource-icon'
                        alt=""
                    />
                    <p className='resources-card-txt'>
                        {resource.type}
                    </p>
                </div>
                <div className='row1-right'>
                    <img
                        src={statusIcon}
                        className='resource-icon'
                        alt=""
                    />
                    <p className={statusClass}>
                        {resource.status}
                    </p>
                </div>
            </div>
            {/* // This row is the main identity of the card, like the title + author line in your Ebooks cards. */}
            <div className='resources-card-row2'>
                <p className='resources-card-name'>
                    {resource.name}
                </p>
                <p className='resources-card-category'>
                    {resource.category}
                </p>
            </div>
            {/* // This is the “live dashboard” part: it shows current performance at a glance. */}
            <div className='resources-card-row3'>
                <div className='row1-left'>
                    <div className='label-and-value'>
                        <p className='resources-card-txt'>
                            Lead time
                        </p>
                        <p className='resources-card-val'>
                            {resource.leadTimeDays} days
                        </p>
                    </div>
                    <div className='label-and-value'>
                        <p className='resources-card-txt'>
                            Capacity
                        </p>
                        <p className='resources-card-val'>
                            {resource.capacityPercent}%
                        </p>
                    </div>
                </div>
                <div className='row1-right'>
                    <div className='label-and-value'>
                        <p className='resources-card-txt'>
                            On-time
                        </p>
                        <p className='resources-card-val'>
                            {resource.onTimeRate}%
                        </p>
                    </div>
                    <div className='label-and-value'>
                        <p className='resources-card-txt'>
                            In transit
                        </p>
                        <p className='resources-card-val'>
                            {resource.activeShipments} shipments
                        </p>
                    </div>
                </div>
            </div>
            <div className='resources-card-row4'>
                {
                    resource.alert != null ?
                            <p className={statusClass}>
                                ! {resource.alert}
                            </p>
                        :
                        <>
                            <img
                                src={checkMark}
                                className='resource-icon'
                                alt=""
                            />
                            <p className='resources-card-txt normally'>
                                Operating normally
                            </p>
                        </>
                }
            </div>
            <div className='resources-card-row5'>
                <Button
                    text='Details'
                />
                <Button
                    text='Contact'
                    onClickBtn={onClickContactBtn}
                />
            </div>
            {
                showDetails &&
                <div className='resources-details-row'>
                    <NavLink
                        to='/'
                        className='resources-details-text'
                    >
                        {resource.contactEmail}
                    </NavLink>
                    <NavLink
                        to='/'
                        className='resources-details-text'
                    >
                        {resource.contactPhone}
                    </NavLink>
                </div>
            }

        </div>
    )
}