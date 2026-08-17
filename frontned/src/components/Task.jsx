import { useNavigate } from 'react-router'
import { InfoCard } from './InfoCard'
import './Task.css'

export function Task({ task }) {

    const navigate = useNavigate()

    return (
        <div 
            onClick={()=>navigate(`/tasks/${task.id}`)}
            className="task-container"
            style={{
                backgroundColor: task.finished ? 'var(--success)' : '#f75e5e'
            }}
        >
            <p className="task-title">
                {task.name}
            </p>
            <div className='task-info'>
                <InfoCard
                    title='type:'
                    subtitle={task.type}
                    color='#e9dac2'
                    width={10}
                />
                <InfoCard
                    title='deadline:'
                    subtitle={task.deadline}
                    fontColor='var(--error)'
                    color='#e9dac2'
                    width={10}
                />
            </div>
            <span className='label-name-t'>
                employee :
                <span className='task-val-t'
                >
                    {task.employee?.name}
                </span>
            </span>
            <span className='label-name-t'>
                book :
                <span className='task-val-t'
                >
                    {task.book?.title}
                </span>
            </span>
        </div>
    )
}