import { Button } from "../../components/Button";
import { InfoCard } from "../../components/InfoCard";
import { NarrowView } from "../../components/NarrowView";
import { Header } from "../layout/Header";
import trashImage from '../../assets/images/icons/trash.png'
import checkImage from '../../assets/images/icons/check.png'
import './ViewTask.css'
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../../lib/axios";

export function ViewTask() {

    const params = useParams();
    const location = useLocation('');
    const [task, setTask] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        async function fetchTask() {
            try {
                setLoading(true)
                const response = await api.get(`/tasks/${params.id}`);
                setTask(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        }
        fetchTask();
    }, [params.id])
    async function deleteTask() {
        try {
            setLoading(true)
            const response = await api.delete(`/tasks/${task.id}`)
            if (response.data.success)
                navigate('/tasks', { state: 'task has been deleted' })

        } catch (error) {
            console.log(error)
        }

    }



    return (
        <>
            <Header />
            <NarrowView>
                <h3>{location.state}</h3>
                <div className="view-task-container">
                    <div className="view-task">
                        <div className="view-task-left">
                            <InfoCard
                                title="Task Name"
                                subtitle={task.name}
                            />
                            <InfoCard
                                title="Type"
                                subtitle={task.type}
                            />
                            <span className='label-name'>
                                to:
                                <span className='task-val'
                                    onClick={() => navigate(`/employees/${task.employee_id}`)}
                                >
                                    {task.employee?.name}
                                </span>
                            </span>
                            <InfoCard
                                title='notes'
                                subtitle={task.notes}
                            />
                        </div>
                        <div className="view-task-right">
                            <InfoCard
                                title="Deadline"
                                subtitle={task.deadline}
                            />
                            <InfoCard
                                subtitle={task.task_size}
                            />
                            <span className='label-name'>
                                about:
                                <span className='task-val'
                                    onClick={() => navigate(`/books/${task.book_id}`)}

                                >
                                    {task.book?.title}
                                </span>
                            </span>
                            <span className='label-name'>
                                Task status:
                                <span className='task-val'>
                                    {task.finished}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="view-task-btns">
                        <Button
                            isLoading={loading}
                            text='delete'
                            onClick={deleteTask}
                            color='red'
                            image={trashImage}
                        />
                        <Button
                            isLoading={loading}
                            text='ok'
                            color='green'
                            onClick={() => navigate('/tasks')}
                            image={checkImage}
                        />
                    </div>
                </div>
            </NarrowView>
        </>
    )
}