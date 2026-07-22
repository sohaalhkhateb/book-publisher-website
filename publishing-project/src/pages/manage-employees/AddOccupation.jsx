import './AddOccupation.css'
import closeIcon from '../../assets/images/icons/close.png'
import backIcon from '../../assets/images/icons/arrow-icon-prefix.png'
export function AddOccupation({ setShowDetails }) {
    function closeShow(event) {
        event.stopPropagation();
        setShowDetails('');
    }
    function backShow(event) {
        event.stopPropagation();
        setShowDetails('edit')
    }
    function clickFun(event) {
        event.stopPropagation();
    }
    return (
        <div
            className="add-occupation-div"
            onClick={clickFun}
        >
            <img
                src={backIcon}
                className='employee-back-icon'
                alt=""
                onClick={backShow}
            />
            <img
                src={closeIcon}
                className='close-add-occupation-icon'
                alt=""
                onClick={closeShow}
            />
            <p className="add-occupation-title">
                Add a new occupation:
            </p>
            <input
                type="text"
                className="add-occupation-input"
                placeholder="occupation name"
            />
            <button className="add-occupation-btn">
                Add
            </button>
        </div>
    )
}