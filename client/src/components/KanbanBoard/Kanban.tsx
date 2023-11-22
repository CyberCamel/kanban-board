import { useEffect, useState } from 'react'
import axios from 'axios'
import KanbanItem from '../KanbanItems/KanbanItem'

interface IKanban {
    id: number
    name: string
    guid: string
}
interface IKanbanTask {
    id: number
    title: string
    content: string
    status: string
    BoardId: number
}
interface IKanbanProps {
    id: number
}

function Kanban({ id }: IKanbanProps) {
    const [tasks, setTasks] = useState<IKanbanTask[]>([])
    const statuses = ['To-Do', 'In progress', 'Completed']

    useEffect(() => {
        const getTasks = async () => {
            await axios
                .get(`/boards/${id}/tasks`)
                .then(({ data }: { data: IKanbanTask[] }) => {
                    setTasks(data)
                })
        }
        getTasks()
    }, [id])

    return (
        <>
            <div className="kanban-board">
                <div className="kanban-board-header">
                    {statuses.map((status) => (
                        <>
                            <div className="kanban-board-header-column">
                                <h3>{status}</h3>
                            </div>
                        </>
                    ))}
                </div>
                <div className="kanban-board-body">
                    {statuses.map((status) => (
                        <>
                            <div className="kanban-board-body-column">
                                {tasks
                                    .filter((task: IKanbanTask) => {
                                        return task.status == status
                                    })
                                    .map((task) => (
                                        <KanbanItem id={task.id}></KanbanItem>
                                    ))}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Kanban
