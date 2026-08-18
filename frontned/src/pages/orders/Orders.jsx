import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { InputList } from "../../components/InputList";
import api from "../../lib/axios";
import { Header } from "../layout/Header";
import { NarrowView } from "../../components/NarrowView";


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
                    status: status || undefined,
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
            <NarrowView>

                <h2>orders</h2>


                <InputList
                    label='choose the status of the orders:'
                    options={[
                        { 'all orders': '' },
                        { accepted: 'accepted' },
                        { pending: 'pending' },
                        { cancelled: 'cancelled' },
                        { done: 'done' }
                    ]}
                    value={status}
                    setValue={setStatus}
                />


                {error && Object.keys(error).length > 0 && (
                    <p>{error.message ?? 'something went wrong'}</p>
                )}


                {loading && <p>loading...</p>}


                {!loading && orders.length === 0 && (
                    <p>no orders found</p>
                )}


                {orders.map((order) => (
                    <div
                        key={order.id}
                        onClick={() => navigate(`/orders/${order.id}`)}
                    >
                        <p>order number: {order.id}</p>
                        <p>status: {order.status}</p>
                        <p>payment: {order.payment}</p>
                        <p>items: {order.order_items?.length ?? 0}</p>
                        <p>created at: 2{order.created_at.slice(1,10)}</p>
                        <hr />
                    </div>
                ))}
            </NarrowView>
        </>
    )
}



