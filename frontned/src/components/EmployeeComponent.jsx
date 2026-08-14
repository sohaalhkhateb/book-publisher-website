import { useNavigate } from 'react-router'
import employeeImage from '../assets/images/icons/person-icon.png'
import starRating from '../assets/images/icons/star-rating.png'
import './EmployeeComponent.css'
export function EmployeeComponent({ name, age, rating, image, id }) {
    const navigate = useNavigate();
    return (
        <div
            className="employee-container"
            onClick={() => navigate(`/employees/${id}`)}
        >
            <img
                src={image}
                alt=""
                className='employee-image'
            />
            <p className='employee-info'>
                employee name : {name}
            </p>
            <p className='employee-info'>
                age : {age}
            </p>

            <div className='emp-rating'>
                {
                    (() => {
                        const stars = [];
                        for (let i = 0; i < rating; i++) {
                            stars.push(
                                <img
                                    key={i}
                                    src={starRating}
                                    alt=""
                                    className='rating-img'
                                />
                            );
                        }
                        return stars;
                    }) ()
                }
            </div>
        </div>
    )
}