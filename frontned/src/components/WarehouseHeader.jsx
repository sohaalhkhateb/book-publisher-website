import './WarehouseHeader.css'
import { v4 as uuidv4 } from 'uuid';
export function WarehouseHeader({ headerState }) {
    const headerItems = [
        {
            title: 'INVENTORY',
            details: 'Publishing House Admin | Manage Paper, Supplies & Book Stock',
            id:1
        },
        {
            title: 'GOODS',
            details: 'Manage packaging, shipping supplies, storage items, and promotional materials',
            id: 2
        }
    ]
    return (
        <div className='warehouse-header'>
            <div className='warehouse-header-right'>
                <p className='warehouse-header-title'>
                    {
                        headerState == 'inventory' ? headerItems[0].title 
                    :
                        headerItems[1].title
                    }
                </p>
                <p className='warehouse-header-txt'>
                    {
                        headerState == 'inventory' ? headerItems[0].details 
                    :
                        headerItems[1].details
                    }
                </p>
            </div>
        </div>
    )
}