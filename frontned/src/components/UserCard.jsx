import './UserCard.css'
import locationIcon from '../assets/images/icons/location-pin.png'
import emailIcon from '../assets/images/icons/email.png'

export function UserCard({ name, location, email }) {
    return (
        <div className="user-card-container">
            <div className="user-card-left">
                <p className="publeisher-name">
                    {name}
                </p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                }}>
                    <img
                        src={locationIcon}
                        className='card-icon'
                        alt=""
                    />
                    <p className="user-location">
                        {location}
                    </p>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                }}
            >
                <img
                    src={emailIcon}
                    className='card-icon'
                    alt=""
                />
                <p className="user-card-email">
                    {email}
                </p>
            </div>
        </div>
    )
}