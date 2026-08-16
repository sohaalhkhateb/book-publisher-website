import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import { Button } from '../../components/Button'
import api from "../../lib/axios";

export function Tasks() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate()

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
            <p>here are all the tasks you created :</p>
            {tasks.map((task) => {
                return (
                    <>
                        <p>{task.name}</p>
                        <p>{task.type}</p>
                        <p>{task.deadline}</p>
                        <p>{task.employee?.name}</p>
                        <p>{task.book?.title}</p>
                        {
                            //task.finished
                        }
                        <p>{//task.
                        }</p>
                    </>

                )
            })}
            <Button
                text='assign a task'
                onClick={() => navigate('/tasks/add')}
            // get add image
            />
        </>
    )
}