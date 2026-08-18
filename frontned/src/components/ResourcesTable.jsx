import './ResourcesTable.css'
import { useNavigate } from "react-router";

export function ResourcesTable({ resources }) {
    const navigate = useNavigate();

    return (
        <div className="resources-table-container">
            <table className="resources-table">
                <thead>
                    <tr>
                        <th className='top-left-table'>
                            ITEM
                        </th>
                        <th>CATEGORY</th>
                        <th>QUANTITY</th>
                        <th>MIN STOCK</th>
                        <th>SUPPLIER</th>
                        <th className='top-right-table'>
                            STATUS
                        </th>
                    </tr>
                </thead>
                <tbody className="resources-table-body">
                    {
                        resources.map((resource, index) => {
                            return (
                                <tr 
                                    key={resource.id}
                                    onClick={() => navigate(`/resources/${resource.id}`)}
                                >
                                    <td>{resource.name}</td>
                                    <td>{resource.category}</td>
                                    <td>{`${resource.stock} ${resource.unit}`}</td>
                                    <td>{resource.min_stock}</td>
                                    <td>{resource.supplier}</td>
                                    <td>
                                        <div
                                            style={{
                                              backgroundColor: resource.status=='in stock' ?  'var(--success)' :
                                              resource.status=='low stock' ? 'var(--accent)' : 'var(--error)',
                                              color: resource.status=='out of stock' ? 'var(--text-muted)' : 'var(--primary)',
                                              padding: '3px',
                                              borderRadius: '10px',
                                              fontWeight: '700',
                                              width: 'max-content'
                                            }}
                                        >
                                            {resource.status}
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