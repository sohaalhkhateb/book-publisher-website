import { Button } from "../../components/Button";
import { useState } from "react";
import upwardsArrow from '../../assets/images/icons/upwardsArrow.png'
import closeImage from '../../assets/images/icons/close.png'
import api from "../../lib/axios";
import { useNavigate } from "react-router";


export function Step4() {

    const [purchase, setPurchase] = useState(null);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    async function next() {
        setLoading(true);
        await api.post('/orders?step=3', {
            purchase,
        }).then((response) => {
            if (response.data.success) {
                setLoading(false)
                if (purchase) {
                    navigate('/guestOrder/5')
                } else {
                    navigate('/guestOrder/6')
                }
            }
        }).catch((errors) => {
            setError(errors.response.data)
            setLoading(false)
        })
    }


    return (
        <>
            <h2>what would you like your order to be ?</h2>


            i want to purchase books
            <input
                type='radio'
                name='order-type'
                checked={purchase === true}
                onChange={() => setPurchase(true)}
            />
            <hr/>
            i want publisher house services
            <input
                type='radio'
                name='order-type'
                checked={purchase === false}
                onChange={() => setPurchase(false)}
            />

            {error.purchase && <p>{error.purchase}</p>}

            <hr />

            <Button
                color='firebrick'
                text='cancel'
                position="left"
                image={closeImage}
                onClick={() => navigate('/guestOrder/3')}
                isLoading={loading}
            />

            <Button
                color='darkgreen'
                text='continue'
                image={upwardsArrow}
                onClick={next}
                isLoading={loading}
            />
        </>
    )
}