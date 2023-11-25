import axios from 'axios'

import { useState } from 'react'
axios.defaults.baseURL = 'http://localhost:3000'
function KanbanCreator() {
    const [name, setName] = useState<string>('')
    const handleNameChange = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setName(e.currentTarget.value)
    }
    const handleKanbanCreation = async () => {
        axios.post('/api/Boards', {
            name: name
        })
    }
    return (
        <>
            <div className="kanban-creator">
                <input value={name} onChange={handleNameChange}></input>
                <button onClick={() => handleKanbanCreation()}>
                    Create Board!
                </button>
            </div>
        </>
    )
}

export default KanbanCreator
