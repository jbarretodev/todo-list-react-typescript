import Task from "./Task"

type Props = {
    listTasks: Array<string>,
    deleteTasks: (index:number) => void
}

const ListaTareas = ({listTasks, deleteTasks}: Props) => {
  return (
    <div className="taskList">
      {listTasks.map((task, index) => (
        <Task key={index} task={task} deleteTask={() => deleteTasks(index)}></Task>
      ))}
    </div>
  )
}

export default ListaTareas