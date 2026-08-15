import './Forbidden.css'
import broken from '../assets/images/bad-robot.png'
import back from '../assets/images/icons/arrow-login-back.png'
import { useNavigate } from 'react-router'

export function Forbiddern() {
    const navigate = useNavigate();
    return (
        <div className="forbidden-container">
            <div className='forbidden-section1'>
                <p className="forbidden-txt">
                    ERROR , 404 FORBIDDEN !</p>
                <img
                    src={broken}
                    className='broken-img'
                    alt=""
                />
            </div>
            <p 
                className='back-text'
                onClick={() => navigate('/login')}
            >
                go back to login page
                <img 
                    src={back}
                    className='back-img'
                    alt=""
                />
            </p>
        </div>
    )
}