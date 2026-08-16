import { useEffect, useState } from "react"
import api from "../../lib/axios"
import { EmployeesComponent } from "../../components/EmployeesComonent";
import { NarrowView } from "../../components/NarrowView";
import { Header } from "../layout/Header";

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
        <>
            <Header />
            <NarrowView>
                <p
                    style={{
                        fontSize: 'clamp(25px, 3vw, 20px)',
                        fontWeight: 'bold',
                        color: 'var(--primary)',
                        marginBottom: '20px',
                        borderBottom: '1px solid var(--primary)',
                        width: 'max-content',
                    }}
                >
                    Your current employees :
                </p>
                {employees != [] &&
                    employees.map((occupation) => {
                        return (
                                <EmployeesComponent
                                    color={occupation.color}
                                    name={occupation.name}
                                    employees={occupation.employees}
                                    key={occupation.id}
                                    occupationId={occupation.id}
                                />

                        )
                    })
                }
            </NarrowView>
        </>
    )
}