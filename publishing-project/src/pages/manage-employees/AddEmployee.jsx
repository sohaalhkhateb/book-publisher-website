import './AddEmployee.css'
import closeIcon from '../../assets/images/icons/close.png'
import backIcon from '../../assets/images/icons/arrow-icon-prefix.png'
export function AddEmployee({ showDetails, setShowDetails }) {
    const occupations = [
        {
            name: 'translators',
            id: crypto.randomUUID()
        },
        {
            name: 'editors',
            id: crypto.randomUUID()
        },
        {
            name: 'checkers',
            id: crypto.randomUUID()
        }
    ]
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
            className="add-employee-container"
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
                className='add-employee-close-icon'
                alt=""
                onClick={closeShow}
            />
            <p className='add-employee-title'>Fill it to add new employee:</p>
            <input
                type="text"
                className='add-employee-input'
                placeholder="employee's name"
            />
            <input
                type="text"
                className='add-employee-input'
                placeholder="employee's job"
            />

            <input
                type="text"
                className='add-employee-input'
                placeholder="employee's salary"
            />
            <input
                type="text"
                className='add-employee-input'
                placeholder="employee's experience years"
            />
            <div className='add-employee-occupation'>
                <p className='add-txt'>
                    select which occupation will be with it:
                </p>
                <select
                    name=""
                    className='add-employee-select'
                    id=""
                >
                    {
                        occupations.map((occupation) => {
                            return (
                                <option
                                    value=""
                                    key={occupation.id}
                                >
                                    {occupation.name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <p className='add-txt'>upload employee photo:</p>
            <div>
                <input
                    type="file"
                    className='add-employee-image'
                />
            </div>
            <button className='add-employee-btn'>
                add new employee
            </button>
        </div>
    )
}