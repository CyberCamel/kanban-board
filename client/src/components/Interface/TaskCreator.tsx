import axios from 'axios'
import { useState } from 'react'

axios.defaults.baseURL = 'http://localhost:3000'
function KanbanCreator({ id }) {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const handleTitleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setTitle(e.currentTarget.value)
    }
    const handleContentChange = (
        e: React.FormEvent<HTMLInputElement>
    ): void => {
        e.preventDefault()
        setContent(e.currentTarget.value)
    }
    const handleKanbanCreation = async () => {
        const response = await axios.post(`/api/Boards/${id}/Tasks`, {
            Title: title,
            Content: content
        })
        if (response.status == 200) {
            console.log('created successfully')
            setContent('')
            setTitle('')
        }
    }
    return (
        <>
            <div className="kanban-creator">
                <input value={title} onChange={handleTitleChange}></input>
                <input value={content} onChange={handleContentChange}></input>
                <button onClick={() => handleKanbanCreation()}>
                    Create Task!
                </button>
            </div>
        </>
    )
}

export default KanbanCreator
