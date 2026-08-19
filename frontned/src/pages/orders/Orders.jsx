import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { InputList } from "../../components/InputList";
import api from "../../lib/axios";
import { Header } from "../layout/Header";
import { NarrowView } from "../../components/NarrowView";
import { OrderComponent } from "../../components/OrderComponent";
import { MainMenu } from "../../components/MainMenu";


export function Orders() {


    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState('');


    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();



    useEffect(() => {

        async function getOrders() {

            setLoading(true);
            setError({});

            await api.get('/orders', {
                params: {
                    'status': status=="all"? null : status ,
                },
            }).then((response) => {
                setOrders(response.data)
            }).catch((errors) => {
                setError(errors.response.data.errors ?? errors.response.data)
            }).finally(() => {
                setLoading(false)
            })
        }

        getOrders()

    }, [status])



    return (
        <>
            <Header />
            <div className='content-container'>
                <NarrowView>
                    <h2
                        style={{
                            fontSize: 'clamp(20px, 2vw, 30px)',
                            color: 'var(--primary)'
                        }}
                    >orders</h2>


                    <InputList
                        label='choose the status of the orders:'
                        options={[
                            { all:'all orders' },
                            { accepted: 'accepted' },
                            { pending: 'pending' },
                            { cancelled: 'cancelled' },
                            { done: 'done' }
                        ]}
                        value={status}
                        setValue={setStatus}
                    />


                    {error && Object.keys(error).length > 0 && (
                        <p
                            style={{
                                fontSize: 'clamp(20px, 2vw, 23px)',
                                color: 'var(--error)',
                            }}
                        >{error.message ?? 'something went wrong'}</p>
                    )}


                    {loading && <p
                        style={{
                            fontSize: 'clamp(20px, 2vw, 23px)',
                            color: 'var(--warning)',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: 'max-content',
                            marginTop: '100px'
                        }}
                    >loading...</p>}


                    {!loading && orders.length === 0 && (
                        <p
                            style={{
                                fontSize: 'clamp(20px, 4vw, 30px)',
                                fontWeight: 'bold',
                                color: '#9299a7ad',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: 'max-content',
                                marginTop: '100px'
                            }}
                        >no orders found !</p>
                    )}

                    <br />
                    <hr />
                    <br />
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: ' repeat(auto-fit, minmax(161px,1fr))',
                            gap: '10px',
                            width: '100%',
                            placeItems: 'center'
                        }}
                    >
                        {orders.map((order) => (
                            <OrderComponent
                                key={order.id}
                                order={order}
                                onClick={() => navigate(`/orders/${order.id}`)}
                            />
                        ))}
                    </div>
                </NarrowView >
            </div>
            <MainMenu />
        </>
    )
}



