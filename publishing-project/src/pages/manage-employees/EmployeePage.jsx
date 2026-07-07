import { useEffect, useState } from 'react'
import { EmployeeComponents } from './EmployeeComponents'
import plusIcon from '../../assets/images/icons/plus.png'
import editIcon from '../../assets/images/icons/edit-icon.png'
import './EmployeePage.css'
import { AddEmployee } from './AddEmployee';
import { Header } from '../../components/Header';
import { Options } from '../../components/Options';
import { MainMenu } from '../../components/MainMenu';
import { SubMenu } from '../../components/SubMenu';
import { EmployeeDetails } from './EmployeeDetails'
import { EmployeeOptions } from './EmployeeOptions'
import { EditEmployee } from './EditEmployee'
import { AddOccupation } from './AddOccupation'
import { AssignComponent } from './AssignComponent'
import PageLayout from '../PageLayout'

export function EmployeePage({ employees, setShowOptionList, showOptionList }) {
    const [showDetails, setShowDetails] = useState('');
    const [showEdit, setShowEdit] = useState(false);
    const [assignTask, setAssignTask] = useState(false);
    const employeesDetails = [
        {
            occupation: 'Translators',
            number: 30,
            employees: employees,
            id: crypto.randomUUID()
        },
        {
            occupation: 'Editors',
            number: 20,
            employees: employees,
            id: crypto.randomUUID()
        },
        {
            occupation: 'Checkers',
            number: 10,
            employees: employees,
            id: crypto.randomUUID()
        },
    ]
    function showEditDetails(event) {
        event.stopPropagation();
        setShowDetails('edit');
    }
    function closeShowDetails(event) {
        event.stopPropagation();
        setShowDetails('');
        setShowOptionList(false);
    }
    return (
        <PageLayout
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
        >
            <div className='content-container'>
                {
                    employeesDetails.map((employeeDetails) => {
                        return (
                            <div
                                className="employee-page-container"
                                key={employeeDetails.id}
                            >
                                <div className='employee-section'>
                                    {employeeDetails.occupation}
                                </div>
                                <div className='employee-components'>
                                    <EmployeeComponents
                                        employees={employeeDetails.employees}
                                        showEdit={showEdit}
                                        setShowEdit={setShowEdit}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
                <img
                    src={editIcon}
                    className='edit-employee-icon'
                    alt=""
                    onClick={showEditDetails}
                />
                {
                    (showDetails == 'edit') &&
                    <EmployeeOptions
                        showDetails={showDetails}
                        setShowDetails={setShowDetails}
                    />
                }
                {
                    (showDetails == 'addEmp') &&
                    <AddEmployee
                        showDetails={showDetails}
                        setShowDetails={setShowDetails}
                    />
                }
                {
                    (showEdit) &&
                    <EditEmployee
                        setShowEdit={setShowEdit}
                    />
                }
                {
                    (showDetails == 'occupation') &&
                    <AddOccupation
                        setShowDetails={setShowDetails}
                    />
                }
            </div>
        </PageLayout>
    )
}