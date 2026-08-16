import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import { Button } from '../../components/Button'
import api from "../../lib/axios";
import { Task } from "../../components/Task";
import { Header } from "../layout/Header";
import { NarrowView } from "../../components/NarrowView";
import plusIconWhite from '../../assets/images/icons/add-white.png'
import './Tasks.css'

export function Tasks() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/tasks')
            .then((response) => {
                setTasks(response.data)
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }, [])

    return (
        <>
            <Header />
            <NarrowView>
                <p className="tasks-title">here are all the tasks you created :</p>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px,1fr))',
                        placeItems: 'center'
                    }}
                >
                    {tasks.map((task) => {
                        return (
                            <Task
                                task={task}
                            />
                        )
                    })}
                </div>
                <div className="tasks-btn-container">
                    <Button
                        text='create task'
                        position='right'
                        image={plusIconWhite}
                        color='var(--success)'
                        onClick={() => navigate('/tasks/add')}
                    // get add image
                    />
                </div>
            </NarrowView>
        </>
    )
}