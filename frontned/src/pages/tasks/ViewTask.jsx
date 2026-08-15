import { Button } from "../../components/Button";
import { InfoCard } from "../../components/InfoCard";
import { NarrowView } from "../../components/NarrowView";
import { Header } from "../layout/Header";
import trashImage from '../../assets/images/icons/trash.png'
import checkImage from '../../assets/images/icons/check.png'
import './ViewTask.css'

export function ViewTask({task}) {
    return (
        <>
            <Header />
            <NarrowView>
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
                                <span className='task-val'>
                                    {task.employee}
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
                                subtitle={task.intire? 'task size the entire book' : `from: ${task.start} , to: ${task.end}`} 
                            />
                            <span className='label-name'>
                                about:
                                <span className='task-val'>
                                    {task.book}
                                </span>
                            </span>
                            <span className='label-name'>
                                Task status:
                                <span className='task-val'>
                                    {task.status}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="view-task-btns">
                        <Button
                            text='delete'
                            color='red'
                            image={trashImage}
                        />
                        <Button
                            text='ok'
                            color='green'
                            image={checkImage}
                        />
                    </div>
                </div>
            </NarrowView>
        </>
    )
}