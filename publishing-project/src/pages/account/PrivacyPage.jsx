import './PrivacyPage.css'
import privecyIcon from '../../assets/images/icons/privecy.png'

export function PrivacyPage() {
    return(
        <div className="privacy-page-container">
            <img 
                src={privecyIcon}
                className='privacy-icon' 
                alt="" 
            />
            <p className='privacy-title'>
                Privacy Setting
            </p>
            <ul className='privacy-list'>
                <li className='privacy-item'>
                    change password
                </li>
                <li className='privacy-item'>
                    change/add email
                </li>
                <li className='privacy-item'>
                    change/add phone number
                </li>
            </ul>
        </div>
    )
}