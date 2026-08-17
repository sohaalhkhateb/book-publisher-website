import { useLocation, useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../layout/Header';
import { NarrowView } from '../../components/NarrowView';
import trashImage from '../../assets/images/icons/trash.png';
import checkImage from '../../assets/images/icons/check.png';
import editImage from '../../assets/images/icons/edit2.png';
import api from '../../lib/axios'
import { InfoCard } from '../../components/InfoCard';
import './ViewResource.css'

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
            <div className='view-resource-container'>
                <h1
                    style={{
                        color: 'var(--success)',
                        fontSize: 'clamp(30px,3vw,25px)',
                        fontWeight: 'bold',
                    }}
                >{location.state}</h1>
                <div className='view-resource-div'>
                    <div className='view-resource-left'>
                        <InfoCard
                            title='Name:'
                            subtitle={resource.name}
                            width={35}
                        />
                        <InfoCard
                            title='Category:'
                            subtitle={resource.category}
                            width={35}
                        />
                        <InfoCard
                            title='Stock:'
                            subtitle={resource.stock}
                            width={35}
                        />
                        <InfoCard
                            title='Unit:'
                            subtitle={resource.unit}
                            width={35}
                        />
                        <InfoCard
                            title='Minimum stock threshold:'
                            subtitle={resource.min_stock}
                            width={35}
                        />
                    </div>
                    <div className='view-resource-right'>
                        <InfoCard
                            title='Unit price:'
                            subtitle={resource.price_in_cents}
                            width={35}
                        />
                        <InfoCard
                            title='Status:'
                            subtitle={resource.status}
                            width={35}
                        />
                        <InfoCard
                            title='Supplier:'
                            subtitle={resource.supplier}
                            width={35}
                        />
                        <InfoCard
                            title='Total value'
                            subtitle={resource.total_value}
                            width={35}
                        />
                    </div>
                </div>
                <div className='view-resources-btns'>
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
            </div>
        </NarrowView>
    );
}