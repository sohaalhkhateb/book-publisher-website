import { useLocation, useNavigate, useOutletContext, useParams } from 'react-router'
import { useEffect, useState } from 'react';
import noPerson from '../../assets/images/icons/account.png'
import { Button } from '../../components/Button';
import trashImage from '../../assets/images/icons/trash.png'
import checkImage from '../../assets/images/icons/check.png'
import editImage from '../../assets/images/icons/edit2.png'
import api from '../../lib/axios';
import './ViewEmployee.css'
import { InfoCard } from '../../components/InfoCard';
import starRating from '../../assets/images/icons/star-rating.png'



export function ViewEmployee() {

  const params = useParams();
  const location = useLocation('');
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setLayoutContext = useOutletContext()


  useEffect(() => {
    setLayoutContext({
      searchBar: false,
      sideBar: false,
      narrowView: true,
      bodyHeader: location.state ?? 'here are the details of this employee :'
    })


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

      <h1 style={{ color: 'var(--success)' }}></h1>
      <div className='view-employee-container'>
        <img src={employee.image ? `${employee.image}?v=${new Date(employee.updated_at).getTime()}` : noPerson}
          alt={employee.name} width='200' height='300'
          className='employee-img'
        />
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
        <p className='view-employee-txt'>
          rating :
        </p>
        <div className='employee-rating'>
          {Array.from({ length: employee.rating })
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
          <>
            <p className='view-employee-txt'>
              notes :
            </p>
            <InfoCard
              subtitle={employee.notes}
            />
          </>
        }
        <p className='view-employee-txt'>
          occupations:
        </p>

        <div className='occupations-section'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            placeItems: 'center'

          }}
        >
          {employee.occupationNames && employee.occupationNames.map(
            function (occ) {
              return (
                <InfoCard
                  subtitle={occ}
                />
              )
            }
          )}
        </div>

        < div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            position: 'sticky',
            bottom: '10px',
            marginTop: '10px'
          }}>


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
      </div >

    </>


  )
}

