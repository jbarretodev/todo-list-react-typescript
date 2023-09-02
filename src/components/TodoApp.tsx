import { useState } from "react"
import ListaTareas from "./ListaTareas"

const TodoApp = () => {
	const [newTask, setNewTask] = useState<string>('')
	const [listTasks, setListTask] = useState<string[]>([])

	const handleAddTask = () => {
		if (newTask.trim() === '') return 
		
		setListTask([...listTasks, newTask])
		setNewTask('')
	
	}
	
	const handleDeleteTask = (index: number) => {
		setListTask(tasks => tasks.filter((_,i) => i != index))
	}

  return (
		<div>
			<h1>Lista de Tareas</h1>
			<div>
				<input type="text" name="task" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Nueva Tarea" />
				<button onClick={handleAddTask}>Add Task</button>
			</div>
			<ListaTareas listTasks={listTasks} deleteTasks={() => handleDeleteTask}></ListaTareas>
    </div>
  )
}

export default TodoApp