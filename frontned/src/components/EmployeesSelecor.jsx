import { EmployeeComponent } from "./EmployeeComponent"

export function EmployeesSelector({ employees, employeeId, setEmployeeId }) {
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
                            onClick={()=>setEmployeeId(employee.id)}
                            employeeId={employeeId}
                            

                        />
                    )
                })
            }
        </div>
    )
}