import './EditProfilePage.css'
import { NavLink } from 'react-router'

export function EditProfilePage() {
    return (
        <div className="edit-profile-container">
            <p className='edit-profile-title'>
                Edit Your Profile:
            </p>
            <div className='txt-input-section'>
                <p className='edit-profile-txt'>
                    Change Publisher Name to:
                </p>
                <input
                    type="text"
                    className='edit-profile-input'
                    placeholder='new Publisher Name'
                />
            </div>
            <div className='txt-input-section'>
                <p className='edit-profile-txt'>
                    Change Publisher Company Location to:
                </p>
                <input
                    type="text"
                    className='edit-profile-input'
                    placeholder='new Location'
                />
            </div>
            <button className='edit-profile-btn edit'>
                Edit 
            </button>
            <div className='more-edit-section'>
                <p className='edit-profile-txt'>
                    if you want more editing
                </p>
                <NavLink
                    to='/privacy'
                    className='edit-profile-link'
                >
                    Click here
                </NavLink>
            </div>
        </div>
    )
}