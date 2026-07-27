import './AssignTask.css'
import closeIcon from '../../assets/images/icons/close.png'
import { useEffect, useRef, useState } from 'react';
export function AssignTask({ setIsAssign, showAssign, setShowAssign }) {
    const [startPage, setStartPage] = useState("");
    const [endPage, setEndPage] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [showError, setShowError] = useState(false);
    useEffect(() => {
        if (showError) {
            const id = setTimeout(() =>
                setShowError(false), 3000);
            return () =>
                clearTimeout(id);
        }
    }, [showError])
    const tasks = [
        {
            type: 'translators',
            id: crypto.randomUUID()
        },
        {
            type: 'editors',
            id: crypto.randomUUID()
        },
        {
            type: 'checkers',
            id: crypto.randomUUID()
        }
    ];
    const setAssign = (event) => {
        event.stopPropagation();
        if (startPage.trim() !== "" && endPage.trim() !== ""
            && startDate.trim() !== "" && endDate.trim() !== "") {
            event.stopPropagation();
            setIsAssign(true);
            setShowAssign(false);
        }
        else {
            event.stopPropagation();
            setShowAssign(true);
            setTimeout(() => {
                setShowError(true);
            }, 100);
        }
    }
    const closeShowAssign = (event) => {
        event.stopPropagation();
        setShowAssign(false);
    }
    const setPageStart = (event) => {
        setStartPage(event.target.value);
    }
    const setPageEnd = (event) => {
        setEndPage(event.target.value);
    }
    const setDateStart = (event) => {
        setStartDate(event.target.value);
    }
    const setDateEnd = (event) => {
        setEndDate(event.target.value);
    }
    const stopPropagate =(event) => {
        event.stopPropagation();
    }
    return (
        <div 
            className="assign-task-component"
            onClick={stopPropagate}
        >
            <img
                src={closeIcon}
                className='close-icon'
                onClick={closeShowAssign}
                alt=""
            />
            <p className='assign-task-title'>
                to assign this book to the employee select:
            </p>
            <p className='assign-task-txt'>
                task type:
            </p>
            <select
                name=""
                id=""
                className='assign-task-select'
            >
                {
                    tasks.map((task) => {
                        return (
                            <option
                                value=""
                                key={task.id}
                            >
                                {task.type}
                            </option>
                        )
                    })
                }
            </select>
            <p className='assign-task-txt'>
                number of pages to assigned:
            </p>
            <div className='assign-inputs-container'>
                <div className='assign-inputs'>
                    <p className='assign-task-txt'>
                        from:
                    </p>
                    <input
                        type="number"
                        value={startPage}
                        onChange={setPageStart}
                        placeholder='number'
                        className='assing-task-input'
                    />
                </div>
                <div className='assign-inputs'>
                    <p className='assign-task-txt'>
                        to:
                    </p>
                    <input
                        type="number"
                        value={endPage}
                        onChange={setPageEnd}
                        placeholder='number'
                        className='assing-task-input'
                    />
                </div>
            </div>
            <div className='assign-inputs-container'>
                <div className='assign-inputs'>
                    <p className='assign-task-txt'>
                        date of begin:
                    </p>
                    <input
                        type="date"
                        value={startDate}
                        onChange={setDateStart}
                        className='assing-task-input'
                    />
                </div>
                <div className='assign-inputs'>
                    <p className='assign-task-txt'>
                        date of end:
                    </p>
                    <input
                        type="date"
                        value={endDate}
                        onChange={setDateEnd}
                        className='assing-task-input'
                    />
                </div>
            </div>
            {
                showError &&
                <p className='error-txt'>
                    you should filled inputs first!
                </p>
            }

            <button
                className='assign-task-btn'
                onClick={setAssign}
            >
                assign
            </button>
        </div>
    )
}