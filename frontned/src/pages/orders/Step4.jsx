import { Button } from "../../components/Button";
import { useState } from "react";
import upwardsArrow from '../../assets/images/icons/upwardsArrow.png'
import closeImage from '../../assets/images/icons/close.png'
import api from "../../lib/axios";
import { useNavigate } from "react-router";
import './Step4.css'

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
            <h2
                style={{
                    fontSize: 'clamp(25px,2vw,30px)',
                    color: 'var(--primary)',
                    marginTop: '140px'
                }}
            >what would you like your order to be ?</h2>
            <div className="radio-group">
                <label className="radio-label">
                    <input
                        type='radio'
                        name='order-type'
                        checked={purchase === true}
                        onChange={() => setPurchase(true)}
                    />
                    <span className="radio-text">
                        i want to purchase books
                    </span>
                </label>
                <hr />
                <label className="radio-label">
                    <input
                        type='radio'
                        name='order-type'
                        checked={purchase === false}
                        onChange={() => setPurchase(false)}
                    />
                    <span className="radio-text">
                        i want publisher house services
                    </span>
                </label>
            </div>
            <br />
            <br />
            <br />
            {error.purchase && <p className="step4-error">{error.purchase}</p>}
            <hr />
            <div className="step4-btns">

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
            </div>
        </>
    )
}