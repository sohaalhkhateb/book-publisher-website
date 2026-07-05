import './ProfilePage.css'
import personImage from '../../assets/images/icons/person-icon.png'
import edit from '../../assets/images/icons/edit.png'
import { NavLink } from 'react-router'
import { useState } from 'react'
import { UploadPhoto } from '../profile/UploadPhoto'
export function ProfilePage() {
    const [showUpload, setShowUplod] = useState(false);

    function toggleUpload() {
        setShowUplod(!showUpload);
    }
    return (
        <div className="profile-container">
            {
                showUpload &&
                <UploadPhoto
                    showUpload={showUpload}
                    setShowUplod={setShowUplod}
                />
            }
            <p className='profile-title'>
                Your Profile:
            </p>
            <div className='profile-edit-container'>
                <img
                    src={edit}
                    className='edit-profile-icon'
                    onClick={toggleUpload}
                    alt=""
                />
                <img
                    src={personImage}
                    className='profile-image'
                    alt=""
                />
            </div>

            <p className='profile-name'>
                Publishe Name
            </p>
            <p className='profile-txt'>
                username@gmail.com
            </p>
            <div className='phone-location-txt'>
                <p className='profile-txt'>
                    +2323 3043232
                </p>
                <p className='profile-txt'>
                    Dubai
                </p>
            </div>
            <NavLink
                to='/edit-profile'
            >
                <button className='edit-profile-btn'>
                    Edit Profile
                </button>
            </NavLink>
        </div>
    )
}