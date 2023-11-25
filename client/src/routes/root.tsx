import '../globals.css'
import KanbanCreator from '../components/Interface/KanbanCreator'
import KanbanList from '../components/KanbanList/KanbanList'
function Root() {
    return (
        <>
            <h1>{'//kanban-board'}</h1>
            <KanbanCreator></KanbanCreator>
            <KanbanList></KanbanList>
        </>
    )
}

export default Root
