import { EmployeeComponent } from "./EmployeeComponent"
import './EmployeesComponent.css'
import { InfoCard } from "./InfoCard"
import trash from "../assets/images/icons/delete.png"
import { useState } from "react"

export function EmployeesComponent({ color, name, employees, occupationId }) {
    const [deleteOption, setDeleteOption] = useState(false);
    const deleteOccupation = () => {
        // delete an occupation with an id : occupationId
    }

    return (
        <div className="employees-comp-container">
            {
                deleteOption &&
                <div className="delete-section">
                    <p className="delete-section-txt">
                        • are you sure you want to delete {name} occupation and all of its employees ?
                    </p>
                    <p className="delete-section-ansure"
                        style={{
                            color: 'white',
                            width: 'max-content',
                            cursor: 'pointer',
                            backgroundColor: 'var(--error)',
                            borderRadius: '20px',
                            padding: '5px',
                            alignSelf: 'center',
                            fontSize: '20px'
                        }}
                        onClick={deleteOccupation}
                    >
                        yes
                    </p>
                    <p className="delete-section-ansure"
                        style={{
                            color: 'white',
                            width: 'max-content',
                            cursor: 'pointer',
                            backgroundColor: 'var(--warning)',
                            borderRadius: '20px',
                            padding: '5px',
                            alignSelf: 'center',
                            fontSize: '20px'
                        }}
                        onClick={() => setDeleteOption(false)}
                    >
                        no
                    </p>
                </div>
            }
            <div
                className="occupation-section"
                style={{
                    backgroundColor: `${color}5e`
                }}
            >
                <p className="occupation-name">
                    •{name}
                </p>
                <img
                    src={trash}
                    className="trash-img"
                    alt=""
                    onClick={() => setDeleteOption(true)}
                />
            </div>
            <div
                className="employees-grid"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))',
                    gap: '10px',
                    placeItems: 'center'

                }}
            >
                {
                    employees == []
                        ?
                        <p className="no-employees-txt">
                            no Employees for this occupation!
                        </p>
                        : employees.length > 0 && employees.map((employee) => {
                            return (
                                <EmployeeComponent
                                    name={employee.name}
                                    age={employee.age}
                                    rating={employee.rating}
                                    image={employee.image}
                                    key={employee.id}
                                    id={employee.id}
                                />
                            )
                        })
                }
            </div>
        </div>
    )
}