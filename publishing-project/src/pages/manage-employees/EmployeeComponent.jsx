import './EmployeeComponent.css'
import employeeImage from '../../assets/images/icons/person-icon.png'
import evaluationIcon from '../../assets/images/icons/graph-1.png'
import arrowList from '../../assets/images/icons/arrow-list.png'
import arrowListDown from '../../assets/images/icons/arrow-list-down.png'
import editIcon from '../../assets/images/icons/edit.png'
import addIcon from '../../assets/images/icons/plus.png'
import { useEffect, useState } from 'react'
import { EditEmployee } from './EditEmployee'
import { EmployeeDetails } from './EmployeeDetails'

export function EmployeeComponent({ key ,image, name, type, salary, evaluation, date, experience, status, works, showEdit, setShowEdit}) {
  const [showDetails, setShowDetails] = useState(false);
  function toggleShowDetails() {
    setShowDetails(!showDetails);
  }
  function showEditEmp(event) {
    event.stopPropagation();
    setShowEdit(!showEdit);
  }
  function assignTask() {
    // axios.post("...url...", key:key)
    //go to the AssignBook component
  }
  return (
    <div
      className="employee-component-container"
      onClick={toggleShowDetails}
    >
      <img
        src={editIcon}
        className='employee-component-edit-icon'
        onClick={showEditEmp}
        alt=""
      />
      <img
        src={addIcon}
        onClick={assignTask}
        className='add-employee-icon'
        alt=""
      />
      {
        showDetails &&
        <EmployeeDetails
          image={image}
          name={name}
          type={type}
          salary={salary}
          evaluation={evaluation}
          date={date}
          experience={experience}
          status={status}
          works={works}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      }
      <img
        src={employeeImage}
        className='employee-image'
        onClick={toggleShowDetails}
        alt=""
      />
      <p className='employee-info'>
        Employee Name : {name}
      </p>
      <p className='employee-info'>
        Job Type: {type}
      </p>
      <img
        src={`../../src/assets/images/icons/graph-${evaluation}.png`}
        className='evaluation-icon'
        alt=""
      />
    </div>
  )
}