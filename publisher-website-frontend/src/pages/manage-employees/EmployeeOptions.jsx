import { useNavigate } from 'react-router'
import closeIcon from '../../assets/images/icons/close.png'
import './EmployeeOptions.css'
export function EmployeeOptions({ showDetails, setShowDetails }) {
    const navigate = useNavigate();
    function goToAddEmp(event) {
        event.stopPropagation();
        setShowDetails('addEmp');
    }
    function goToAddOcc(event) {
        event.stopPropagation();
        setShowDetails('occupation');
        showOptionList(false);
    }
    function closeShow(event) {
        event.stopPropagation();
        setShowDetails('');
    }
    function clickFun(event) {
        event.stopPropagation();
    }
    return (
        <div 
            className="employee-options-container"
            onClick={clickFun}
        >
            <img
                src={closeIcon}
                className='close-add-occupation-icon'
                alt=""
                onClick={closeShow}
            />
            <p className='employee-options-title'>Edit</p>
            <div className='employee-options-two-sections'>
                <div className='employee-options-left-section'>
                    <p className='employee-options-txt'>
                        Add a new employees:
                    </p>
                    <button
                        className='employee-options-btn'
                        onClick={goToAddEmp}
                    >
                        Add
                    </button>
                </div>
                <div className='driver'></div>
                <div className='employee-options-right-section'>
                    <p className='employee-options-txt'>
                        Add a new occupation:
                    </p>
                    <button
                        className='employee-options-btn'
                        onClick={goToAddOcc}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}