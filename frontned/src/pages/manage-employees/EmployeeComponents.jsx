import {EmployeeComponent} from './EmployeeComponent'

export function EmployeeComponents({ employees, showEdit, setShowEdit}) {
    return (
        <>
            {
                employees.map((employee) => {
                    return(
                        <EmployeeComponent
                            image={employee.image}
                            name={employee.name}
                            type={employee.type}
                            salary={employee.salary}
                            evaluation={employee.evaluation}
                            date={employee.date}
                            experience={employee.experience}
                            status={employee.status}
                            works={employee.works}
                            key={employee.id}
                            showEdit={showEdit}
                            setShowEdit={setShowEdit}
                        />
                    )
                })
            }
        </>
    )
}