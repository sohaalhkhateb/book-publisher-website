import employeeImage from '../../assets/images/icons/person-icon.png'
import evaluationIcon from '../../assets/images/icons/graph-1.png'
import arrowList from '../../assets/images/icons/arrow-list.png'
import arrowListDown from '../../assets/images/icons/arrow-list-down.png'
import editIcon from '../../assets/images/icons/edit.png'
import closeIcon from '../../assets/images/icons/close.png'
import { useEffect, useState } from 'react'
import './EmployeeDetails.css'
export function EmployeeDetails({ name, type, salary, evaluation, date, experience, status, works, showDetails, setShowDetails }) {
    const [showWorks, setShowWorks] = useState(false);
    function toggleShowWorks(event) {
        event.stopPropagation();
        setShowWorks(!showWorks);
    }
    function toggleShowDetails(event) {
        event.stopPropagation();
        setShowDetails(!showDetails);
    }
    function clickFun(event) {
        event.stopPropagation();
    }
    return (

        <div
            className="employee-details-container"
            onClick={clickFun}
        >
            <img
                src={closeIcon}
                className='close-employee-details'
                onClick={toggleShowDetails}
                alt=""
            />
            <img
                src={employeeImage}
                className='employee-image'
                alt=""
            />
            <p className='employee-info'>
                Employee Name : {name}
            </p>
            <p className='employee-info'>
                Job Type: {type}
            </p>
            <p className='employee-info'>
                Salary: {salary}$
            </p>
            <img
                src={`../../src/assets/images/icons/graph-${evaluation}.png`}
                className='evaluation-icon'
                alt=""
            />
            <p className='employee-info'>
                Date of empoyement : {date}
            </p>
            <p className='employee-info'>
                The years of experience : {experience} years
            </p>
            <p className='employee-info'>
                Status: {status}
            </p>
            <div className='employee-works-container'>
                <p className='employee-info'>
                    The works by emoloyee name
                </p>
                <img
                    src={showWorks ? arrowListDown : arrowList}
                    className='arrow-list'
                    alt=""
                    onClick={toggleShowWorks}
                />
            </div>
            <div className={showWorks ? 'employees-works-names' : 'hidden'}>
                {
                    works.map((work) => {
                        return (
                            <p key={works.id}>
                                {work.job}
                            </p>
                        )
                    })

                }
            </div>
        </div>
    )
}