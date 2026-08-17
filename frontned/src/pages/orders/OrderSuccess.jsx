import { Link } from 'react-router'
export function OrderSuccess() {
    return (
        <>
            <h1>success!</h1>
            <p>your order has been ceated successfully</p>
            <Link to='/login'>
                click here to go back
            </Link>
        </>
    )
}