import { useLocation, useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../layout/Header';
import { NarrowView } from '../../components/NarrowView';
import trashImage from '../../assets/images/icons/trash.png';
import checkImage from '../../assets/images/icons/check.png';
import editImage from '../../assets/images/icons/edit2.png';
import api from '../../lib/axios';

export function ViewResource() {

    const params = useParams();
    const location = useLocation('');
    const [resource, setResource] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchResource() {
            try {
                setLoading(true);
                const response = await api.get(`/resources/${params.id}`);
                setResource(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchResource();
    }, [params.id]);

    async function deleteResource() {
        try {
            setLoading(true);
            const response = await api.delete(`/resources/${resource.id}`);
            if (response.data.success)
                navigate('/', { state: 'resource has been deleted' });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <NarrowView>
            <Header />
            <h1>{location.state}</h1>
            <div>
                <p>id: {resource.id}</p>
                <p>name: {resource.name}</p>
                <p>category: {resource.category}</p>
                <p>stock: {resource.stock}</p>
                <p>unit: {resource.unit}</p>
                <p>minimum stock threshold: {resource.min_stock}</p>
                <p>unit price: {resource.price_in_cents}</p>
                <p>status: {resource.status}</p>
                <p>supplier: {resource.supplier}</p>
                <p>total_value: {resource.total_value}</p>
            </div>
            <div>
                <Button
                    text='delete'
                    color='red'
                    onClick={deleteResource}
                    isLoading={loading}
                    image={trashImage}
                />
                <Button
                    text='edit'
                    onClick={() => navigate(`/resources/edit/${resource.id}`)}
                    isLoading={loading}
                    image={editImage}
                />
                <Button
                    text='ok'
                    color='green'
                    onClick={() => navigate('/resources')}
                    isLoading={loading}
                    image={checkImage}
                />
            </div>
        </NarrowView>
    );
}