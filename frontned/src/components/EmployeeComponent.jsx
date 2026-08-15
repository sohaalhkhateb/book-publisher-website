import { useNavigate } from 'react-router'
import employeeImage from '../assets/images/icons/person-icon.png'
import starRating from '../assets/images/icons/star-rating.png'
import './EmployeeComponent.css'
import { useState } from 'react';
export function EmployeeComponent({ name, age, rating, image, id, select = false, onClick, selectEmployeeId }) {
    const navigate = useNavigate();
    const [isHovered, setIsHoverd] = useState(false);

    function defaultHandle() {
        navigate(`/employees/${id}`)

    }
    return (
        <div
            className="employee-container"
            onClick={onClick ?? defaultHandle}
            onMouseEnter={() => setIsHoverd(true)}
            onMouseLeave={() => setIsHoverd(false)}
            style={{
                transform: (isHovered && select) ?
                    "scale(1.04)" : "scale(1)",
                backgroundColor: (select && selectEmployeeId) ?
                    'var(--success)' : 'var(--primary)',
            }}
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
                    })()
                }
            </div>
        </div >
    )
}