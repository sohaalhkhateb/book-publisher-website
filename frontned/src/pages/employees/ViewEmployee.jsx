import { useLocation, useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react';
import { Header } from '../layout/Header';
import { Button } from '../../components/Button';
import trashImage from '../../assets/images/icons/trash.png'
import checkImage from '../../assets/images/icons/check.png'
import editImage from '../../assets/images/icons/edit2.png'
import api from '../../lib/axios';
import './ViewEmployee.css'




export function ViewEmployee() {

    const params = useParams();
    const location = useLocation('');
    const [employee, setEmployee] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {

        async function fetchEmployee() {
            try {
                setLoading(true)
                const response = await api.get(`/employees/${params.id}`);
                setEmployee(response.data)
            } catch (error) {
                console.log(error)

            } finally {
                setLoading(false);
            }
        }
        fetchEmployee();

    }, [])

    async function deleteEmployee() {
        try {
            setLoading(true)
            const response = await api.delete(`/employees/${employee.id}`)
            if (response.data.success)
                navigate('/', { state: 'employee has been deleted' })

        } catch (error) {
            console.log(error)
        }

    }



    return (
        <>
            <Header />
            <h1>{location.state}</h1>
            <div>
                <div>

                    <h3>employee name :</h3>
                    <p>{employee.title}</p>

                    <h3>name</h3>
                    <p>sam</p>
                    <h3>name</h3>
                    <p>sam</p>
                    <h3>name</h3>
                    <p>sam</p>
                    <h3>name</h3>
                    <p>sam</p>
                    <h3>name</h3>
                    <p>sam</p>
                    <h3>name</h3>
                    <p>sam</p>
                </div>
                <img src={employee.image} alt="book image" width='200' height='300' />

            </div>
            <div className='button-container'>
                <Button
                    text='delete'
                    color='red'
                    onClick={deleteEmployee}
                    isLoading={loading}
                    image={trashImage}
                />
                <Button
                    text='edit'
                    onClick={() => navigate(`/employees/edit/${employee.id}`)}
                    isLoading={loading}
                    image={editImage}
                />
                <Button
                    text='ok'
                    color='green'
                    onClick={() => navigate('/employees')}
                    isLoading={loading}
                    image={checkImage}
                />
            </div>

        </>


    )
}
