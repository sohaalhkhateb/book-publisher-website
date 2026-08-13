import { useEffect, useState } from "react"
import api from "../../lib/axios"

export function Employees() {

    const [employees, setEmployees] = useState({});
    
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
        <></>
    )
}