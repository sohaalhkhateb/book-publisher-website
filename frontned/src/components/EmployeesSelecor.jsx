import { EmployeeComponent } from "./EmployeeComponent"

export function EmployeesSelector({ employees, selectEmployeeId, onToggleEmployee }) {
    return (
        <div className="employees-grid"
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))',
                gap: '10px',
                placeItems: 'center'

            }}>
            {
                employees && employees.map((employee) => {
                    return (
                        <EmployeeComponent
                            name={employee.name}
                            age={employee.age}
                            rating={employee.rating}
                            image={employee.image}
                            key={employee.id}
                            id={employee.id}
                            select={true}
                            selectEmployeeId={selectEmployeeId === employee.id}
                            onClick={() => {
                                onToggleEmployee(employee.id)
                                /* choose this employee with ${employee.id} */
                            }}
                        />
                    )
                })
            }
        </div>
    )
}