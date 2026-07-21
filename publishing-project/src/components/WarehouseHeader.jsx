import './WarehouseHeader.css'

export function WarehouseHeader({ headerState }) {
    const headerItems = [
        {
            title: 'INVENTORY',
            details: 'Publishing House Admin | Manage Paper, Supplies & Book Stock',
            id: crypto.randomUUID()
        },
        {
            title: 'GOODS',
            details: 'Manage packaging, shipping supplies, storage items, and promotional materials',
            id: crypto.randomUUID()
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