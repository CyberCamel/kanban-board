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

function KanbanItem({ title, content }: IKanbanTaskProps) {
    return (
        <>
            <div className="kanban-task-container">
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </>
    )
}

export default KanbanItem
