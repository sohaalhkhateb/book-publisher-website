import './EditEmployee.css'
import closeIcon from '../../assets/images/icons/close.png'
export function EditEmployee({ setShowEdit }) {

    function closeShow(event) {
        event.stopPropagation();
        setShowEdit(false);
    }
    function clickFun(event) {
        event.stopPropagation();
    }
    return (
        <div 
            className='edit-employee-container'
            onClick={clickFun}
        >
            <img
                src={closeIcon}
                className='close-edit-icon'
                alt=""
                onClick={closeShow}
            />
            <div className='edit-info-container'>
                <p className='edit-info-txt'>change type job to:</p>
                <input
                    type="text"
                    className='edit-info-input'
                    name=""
                    id=""
                />
            </div>
            <div className='edit-info-container'>
                <p className='edit-info-txt'>change salary to:</p>
                <input
                    type="text"
                    className='edit-info-input'
                    name=""
                    id=""
                />
            </div>
            <div className='edit-info-container'>
                <p className='edit-info-txt'>change evaluation to:</p>
                <select
                    name="star"
                    id=""
                    className='evaluation-selector'
                >
                    <option value="1">1 Star</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                </select>
            </div>
            <div className='edit-info-container'>
                <p className='edit-info-txt'>change status to:</p>
                <div className='status-info-container'>
                    <input
                        type="radio"
                        className='edit-info-radio'
                        name=""
                        id=""
                    />
                    <p>active</p>
                </div>
                <div className='status-info-container'>
                    <input
                        type="radio"
                        className='edit-info-radio'
                        name=""
                        id=""
                    />
                    <p>idle</p>
                </div>
            </div>
            <div className='edit-info-container'>
                <p className='edit-info-txt'>assign new job:</p>
                <input
                    type="text"
                    className='edit-info-input'
                    name=""
                    id=""
                />
            </div>
            <button
                className='confirm-edit-button'
            >
                confirm
            </button>
        </div>
    )
}