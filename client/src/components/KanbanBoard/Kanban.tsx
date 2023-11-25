import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import KanbanItem from '../KanbanItems/KanbanItem'
import TaskCreator from '../Interface/TaskCreator'

interface IKanbanTask {
    id: number
    title: string
    content: string
    status: string
    BoardId: number
}

interface IGetTasksResponse {
    tasks: IKanbanTask[]
}

function Kanban() {
    let id = useLocation().pathname
    id = id.substring(id.lastIndexOf('/') + 1, id.length)

    const [tasks, setTasks] = useState<IGetTasksResponse>({ tasks: [] })

    const statuses = ['To-Do', 'In progress', 'Completed']

    console.log(tasks)
    useEffect(() => {
        const getTasks = async () => {
            try {
                const response = await axios.get<IGetTasksResponse>(
                    `/api/Boards/${id}/Tasks`
                )
                setTasks(response.data)
            } catch (error) {
                console.error('Error fetching tasks:', error)
                setTasks({ tasks: [] })
            }
        }
        getTasks()
    }, [id])

    return (
        <>
            <TaskCreator id={id}></TaskCreator>
            <div className="kanban-board">
                <div className="kanban-board-header">
                    {statuses.map((status, index1) => (
                        <div
                            key={index1}
                            className="kanban-board-header-column"
                        >
                            <h3>{status}</h3>
                        </div>
                    ))}
                </div>
                <div className="kanban-board-body">
                    {statuses?.map((status, index2) => (
                        <div key={index2} className="kanban-board-body-column">
                            {tasks.tasks
                                .filter((task: IKanbanTask) => {
                                    console.log(task.status === status)
                                    return task.status === status
                                })
                                .map((task) => {
                                    console.log('mapping:' + task)
                                    return (
                                        <KanbanItem
                                            key={task.id}
                                            title={task.title}
                                            content={task.content}
                                        ></KanbanItem>
                                    )
                                })}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Kanban
