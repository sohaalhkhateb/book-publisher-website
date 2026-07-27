import './WarehouseTable.css'

export function WarehouseTable({items}) {
    return (
        <div className="warehouse-table-container">
            <table className='warehouse-table'>
                <thead>
                    <tr>
                        <th
                            className='top-left-table'
                        >
                            ITEM
                        </th>
                        <th>CATEGORY</th>
                        <th>QUANTITY</th>
                        <th>MIN STOCK</th>
                        <th>SUPPLIER</th>
                        <th
                            className='top-right-table'
                        >STATUS</th>
                    </tr>
                </thead>
                <tbody className='warehouse-table-body'>
                    {
                        items.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.itemName}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        {item.quantity} {item.unit}
                                    </td>
                                    <td>{item.minimumStock}</td>
                                    <td>{item.supplier}</td>
                                    <td>
                                        <div
                                            className={
                                                item.status === 'IN STOCK'
                                                    ? 'warehouse-row-states green-stock'
                                                    : item.status === 'LOW STOCK' || item.status === 'AVAILABLE'
                                                        ? 'warehouse-row-states yellow-stock'
                                                        : 'warehouse-row-states red-stock'
                                            }
                                        >
                                            {item.status}
                                        </div>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}