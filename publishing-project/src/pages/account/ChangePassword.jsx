import './ChangePassword.css'

export function ChangePassowrd() {
    return (
        <div className="change-pw-container">
            <p className='change-pw-txt'>
                to change your password please enter the current password first:
            </p>
            <input
                type="text"
                className='pw-input'
                placeholder='current pw'
            />
            <input
                type="text"
                className='pw-input'
                placeholder='new pw'
            />
            <input
                type="text"
                className='pw-input'
                placeholder='confirm new pw'
            />
            <button className='pw-btn'>
                change
            </button>
        </div>
    )
}