import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
interface IKanban {
    id: number
    name: string
    guid: string
}

function KanbanList() {
    const [boards, setBoards] = useState<IKanban[]>([])

    useEffect(() => {
        const getBoards = async () => {
            await axios
                .get(`/api/Boards`)
                .then(({ data }: { data: IKanban[] }) => {
                    setBoards(data)
                })
        }
        getBoards()
    }, [])

    return (
        <>
            <ul className="kanban-list">
                {boards?.map((board, index) => (
                    <li key={index}>{board.name}</li>
                ))}
            </ul>
        </>
    )
}

export default KanbanList
