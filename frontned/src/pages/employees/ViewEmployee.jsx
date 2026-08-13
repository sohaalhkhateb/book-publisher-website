import { useLocation, useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react';
import { Header } from '../layout/Header';
import { Button } from '../../components/Button';
import trashImage from '../../assets/images/icons/trash.png'
import checkImage from '../../assets/images/icons/check.png'
import editImage from '../../assets/images/icons/edit2.png'
import api from '../../lib/axios';
import './ViewEmployee.css'
import { NarrowView } from '../../components/NarrowView';
import { InfoCard } from '../../components/InfoCard';
import starRating from '../../assets/images/icons/star-rating.png'



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
            <NarrowView>
                <h1>{location.state}</h1>
                <div>
                    <img src={`${employee.image}?v=${new Date(employee.updated_at).getTime()}`}
                        alt={employee.name} width='200' height='300'
                        className='employee-img'
                    />
                    <div className='employee-info-section'>
                        <div className='employee-info'>
                            <InfoCard
                                title='Name'
                                subtitle={employee.name}
                            />
                            <InfoCard
                                title='Age'
                                subtitle={employee.age}
                            />
                        </div>
                        <div className='employee-rating'>
                            {Array.from({length: employee.rating})
                            .map((i) => (
                                <img 
                                    key={i}
                                    src={starRating} 
                                    alt=""
                                    className='rating-image'
                                />
                            ))}
                        </div>
                        {
                            employee.notes &&
                            <InfoCard
                                subtitle={employee.notes}
                            />
                        }
                        
                    </div>
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
            </NarrowView>
        </>


    )
}

{/*
age:43
name:"ssssssssaaaaaaaa33ssammsss"
notes:null
occupationNames:["translator", "rrr", "wertytrewqwertyuhg", "s", "ssexsd"]
rating:"3" */}