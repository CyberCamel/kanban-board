import './globals.css'
import Kanban from './components/KanbanBoard/Kanban'
import KanbanCreator from './components/Interface/KanbanCreator'
function Home() {
    return (
        <>
            <h1>{'//kanban-board'}</h1>
            <KanbanCreator></KanbanCreator>
        </>
    )
}

export default Home
