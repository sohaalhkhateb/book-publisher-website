import { Link } from 'react-router'
import back from '../../assets/images/icons/arrow-login-back.png'
import { useNavigate } from 'react-router'
import './OrderSuccess.css'


export function OrderSuccess() {
    const navigate = useNavigate();
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 'auto',
                marginRight: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '200px',
                gap:'20px'
            }}
        >
            <h1
                style={{
                    fontSize: 'clamp(25px, 10vw, 40px)',
                    color: 'var(--success)',
                }}
            >success!</h1>
            <p
                style={{
                    fontSize: 'clamp(25px, 10vw, 30px)',
                    color: 'var(--shadow)'
                }}
            >your order has been ceated successfully</p>
            <p
                className='back-text-order'
                onClick={() => navigate('/login')}
            >
                click here to go back
                <img
                    src={back}
                    className='back-img'
                    alt=""
                />
            </p>
        </div>
    )
}