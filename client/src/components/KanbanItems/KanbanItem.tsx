interface IKanbanTask {
    id: number
    title: string
    content: string
    BoardId: number
}
interface IKanbanTaskProps {
    title: string
    content: string
}

function KanbanItem({ title,content }: IKanbanTaskProps) {


    return <>
        <div className="kanban-task-container">
            
        </div>
    </>
}

export default KanbanItem
