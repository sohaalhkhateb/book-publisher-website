import { useEffect, useState } from "react"
import api from "../../lib/axios"

export function Employees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        api.get('/employees')
            .then((response) => {
                setEmployees(response.data)
            })
            .catch((error) => {
                console.log(error.response.data)

            })
    }, [])


    return (
        employees.map((occupation) => {
            return (
                <>
                    <p>name : {occupation.name}</p>
                    <p>color : {occupation.color}</p>
                    <hr />
                    {
                        occupation.employees.map((employee) => {
                            return (
                                <>
                                    <p>employee name : {employee.name}</p>
                                    <p>employee age : {employee.age}</p>
                                    <p>employe rating : {employee.rating}</p>
                                    <img src={employee.image} alt="" width='200px'/>
                                </>
                            )
                        })
                    }
                    <hr />
                </>
            )
        })
    )
}