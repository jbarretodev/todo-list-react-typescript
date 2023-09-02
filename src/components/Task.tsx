type TareaProps = {
    task: string,
    deleteTask: () => void
}

const Task = ({task,deleteTask}: TareaProps) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={deleteTask}>Borrar</button>
    </div>
  )
}

export default Task