import { useEffect, useState } from "react"
import api from "../../lib/axios"
import { EmployeesComponent } from "../../components/EmployeesComonent";
import { NarrowView } from "../../components/NarrowView";
import { Header } from "../layout/Header";
import plusIconWhite from '../../assets/images/icons/add-white.png'
import { useNavigate } from "react-router";
import { Button } from "../../components/Button";

export function Employees() {

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

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
                <div 
                    style={{
                        position: 'fixed',
                        bottom: '45px',
                        right: '40px',
                        cursor: 'pointer'
                    }}
                >
                    <Button
                        text='add employees'
                        position='right'
                        image={plusIconWhite}
                        color='var(--success)'
                        onClick={() => navigate('/employees/add')}
                    // get add image
                    />
                </div>
            </NarrowView>
        </>
    )
}