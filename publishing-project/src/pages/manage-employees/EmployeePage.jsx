import { useEffect, useState } from 'react'
import { EmployeeComponents } from './EmployeeComponents'
import plusIcon from '../../assets/images/icons/plus.png'
import editIcon from '../../assets/images/icons/edit (1).png'
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

export function EmployeePage({ employees, setHomeProducts, setShowOptionList, showOptionList }) {
    const [showDetails, setShowDetails] = useState('');
    const [showEdit, setShowEdit] = useState(false);
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
        <div
            className='container'
            onClick={closeShowDetails}
        >
            <Header
                showOptionList={showOptionList}
                setShowOptionList={setShowOptionList}
                setHomeProducts={setHomeProducts}
            />
            <Options
                showOptionList={showOptionList}
                setShowOptionList={setShowOptionList}
            />
            <MainMenu />
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
            <SubMenu />
        </div>
    )
}