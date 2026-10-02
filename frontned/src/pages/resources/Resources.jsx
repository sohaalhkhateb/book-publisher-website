import { useEffect, useState } from "react"
import api from '../../lib/axios'
import { Button } from "../../components/Button";
import { useNavigate, useOutletContext } from "react-router";
import plusIcon from '../../assets/images/icons/plus2.png'
import { Card } from "../../components/Card";
import { ResourcesTable } from "../../components/ResourcesTable";
import Loading from "../Loading";
import EmptyPage from "../EmptyPage";

export function Resources() {

    const [info, setInfo] = useState({});
    const [queryFilter, setQueryFilter] = useState('');
    const [usedFilter, setUsedFilter] = useState('');

    const navigate = useNavigate();
    const setLayoutContext = useOutletContext()



    useEffect(() => {

        setLayoutContext({
            searchBar: false,
            sideBar: true,
            narrowView: true,
            bodyHeader: 'here are the available resources in your inventory :'
        })

        api.get(`/resources${queryFilter}`)
            .then((response) => {
                setInfo(response.data)
            }).catch((errors) => {
                console.log(errors.response.data)
            })

    }, [queryFilter])
    if (info.resources == null) {
        return <Loading />
    }
    if (info.resources.length == 0) {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <EmptyPage type='task' />
                <div
                    style={{
                        transform: 'translateY(-200px)'
                    }}
                >
                    <Button
                        text='create a new resource'
                        position='right'
                        color='var(--success)'
                        image={plusIcon}
                        onClick={() => navigate('/resources/add')}
                    />
                </div>
            </div>

        )
    }
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px'
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <Card
                        number={info.totalStock}
                        title='TOTAL ITEMS'
                        subTitle='Active inventory lines'
                        onClick={() => { setQueryFilter('?orderBy=highestStock'); setUsedFilter('ordered by stock') }}
                    />
                    <Card
                        number={info.lowStockCount}
                        title='LOW STOCK'
                        subTitle='Reorder soon'
                        adition='LOW'
                        color="var(--accent)"
                        onClick={() => { setQueryFilter('?filterBy=lowStock'); setUsedFilter('showing low stock resources only') }}
                    />
                    <Card
                        number={info.outOfStockCount}
                        title='OUT OF STOCK'
                        subTitle='Unavailable'
                        adition='OUT'
                        color="var(--error)"
                        onClick={() => { setQueryFilter('?filterBy=outOfStock'); setUsedFilter('showing \'out of stock\' resources only') }}
                    />
                    <Card
                        number={info.totalCost}
                        title='INVENTORY VALUE'
                        subTitle='Total wholesale value'
                        onClick={() => { setQueryFilter('?orderBy=highestCost'); setUsedFilter('ordered by cost') }}
                    />
                </div>

                <h1>{usedFilter}</h1>
                <ResourcesTable resources={info.resources} />
                < div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        position: 'sticky',
                        bottom: '10px',
                        marginTop: '10px'
                    }}>
                    <Button
                        text='create a new resource'
                        position='right'
                        color='var(--success)'
                        image={plusIcon}
                        onClick={() => navigate('/resources/add')}
                    />
                </div>
            </div>

        </>
    )
}