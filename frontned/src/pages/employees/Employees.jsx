import { useEffect, useState } from "react"
import api from "../../lib/axios"
import { EmployeesComponent } from "../../components/EmployeesComonent";
import plusIconWhite from '../../assets/images/icons/add-white.png'
import { useNavigate, useOutletContext, useSearchParams } from "react-router";
import { Button } from "../../components/Button";
import EmptyPage from "../EmptyPage";
import Loading from "../Loading";

export function Employees() {

    const setLayoutContext = useOutletContext()
    const [employees, setEmployees] = useState(undefined);
    const navigate = useNavigate();
    const [urlP, setUrlP] = useSearchParams()
    const [refresher, setRefresher] = useState(false)
    useEffect(() => {

        setLayoutContext({
            searchBar: true,
            sideBar: true,
            narrowView: true,
            fallbackPage: '/employees',
            bodyHeader: 'your current employees :'
        })

        api.get('/employees', {
            params: {
                'search': urlP.get('search') || undefined
            }
        })
            .then((response) => {
                setEmployees(response.data)

            })
            .catch((error) => {
                console.log(error.response.data)

            })
    }, [urlP,refresher])

    if (employees == null) {
        return <Loading />
    }
    if (employees.length == 0) {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <EmptyPage type='employee' />
                <div
                    style={{
                        transform: 'translateY(-200px)'
                    }}
                >
                    <Button
                        text='add employees'
                        position='right'
                        image={plusIconWhite}
                        color='var(--success)'
                        onClick={() => navigate('/employees/add')}
                    />

                </div>
            </div>

        )
    }
    return (
        <>

            {employees != [] &&
                employees.map((occupation) => {
                    return (
                        <EmployeesComponent
                            color={occupation.color}
                            name={occupation.name}
                            employees={occupation.employees}
                            key={occupation.id}
                            occupationId={occupation.id}
                            setRefresher={setRefresher}
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
                />
            </div>
        </>
    )
}