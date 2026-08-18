import { useEffect, useState } from "react"
import api from '../../lib/axios'
import { Button } from "../../components/Button";
import { useNavigate } from "react-router";
import plusIcon from '../../assets/images/icons/plus2.png'
import { Card } from "../../components/Card";
import { Header } from "../layout/Header";
import { NarrowView } from "../../components/NarrowView";
import { ResourcesTable } from "../../components/ResourcesTable";

export function Resources() {

    const [info, setInfo] = useState({});
    const [queryFilter, setQueryFilter] = useState('');
    const [usedFilter, setUsedFilter] = useState('');

    const navigate = useNavigate();


    useEffect(() => {
        api.get(`/resources${queryFilter}`)
            .then((response) => {
                setInfo(response.data)
            }).catch((errors) => {
                console.log(errors.response.data)
            })

    }, [queryFilter])
    return (
        <>
            <Header />
            <NarrowView>
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
                    {
                        info.resources ? <ResourcesTable resources={info.resources} /> :
                            <p
                                style={{
                                    textAlign: 'center',
                                    fontSize: 'clamp(30px, 3.5vw, 25px)',
                                    textDecoration: 'underline',
                                    color: 'var(--warning)',
                                    width: 'max-content',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }}
                            >NO RESOURCES YET!</p>
                    }
                    <div
                        style={{
                            position: 'fixed',
                            bottom: '45px',
                            right: '40px',
                            cursor: 'pointer'
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
            </NarrowView>
        </>
    )
}