import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router"
import { Button } from '../../components/Button'
import api from "../../lib/axios";
import { Task } from "../../components/Task";
import { Header } from "../layout/Header";
import { NarrowView } from "../layout/NarrowView";
import plusIconWhite from '../../assets/images/icons/add-white.png'
import './Tasks.css'
import { MainMenu } from "../../components/MainMenu";
import EmptyPage from "../EmptyPage";
import Loading from "../Loading";

export function Tasks() {
  const [tasks, setTasks] = useState(undefined);
  const navigate = useNavigate();
  const setLayoutContext = useOutletContext()


  useEffect(() => {
    setLayoutContext({
      searchBar: false,
      sideBar: true,
      narrowView: true,
      bodyHeader: 'here are the tasks that you created :'
    })


    api.get('/tasks')
      .then((response) => {
        setTasks(response.data)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }, [])
  if (tasks == null) {
      return <Loading />
    }
  if (tasks.length == 0) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <EmptyPage type='task' />
        <div
          style={{
            transform: 'translateY(-200px)'
          }}
        >
          <Button
            text='create task'
            position='right'
            image={plusIconWhite}
            color='var(--success)'
            onClick={() => navigate('/tasks/add')}
          />
        </div>
      </div>

    )
  }
  return (
    <>

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

      < div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          position: 'sticky',
          bottom: '10px',
          marginTop: '10px'
        }}>

        <Button
          text='create task'
          position='right'
          image={plusIconWhite}
          color='var(--success)'
          onClick={() => navigate('/tasks/add')}
        />
      </div >
    </>
  )
}