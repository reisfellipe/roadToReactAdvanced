import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import './App.css'
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      title:"Estudar programação",
      description:"Estudar programação para se tornar um desenvolvedor front end.",
      isCompleted: false,
    },
    {
      id: 2,
      title:"Estudar React.JS",
      description:"Estudar React para arrumar um emprego ou estágio.",
      isCompleted: false,
    },
    {
      id: 3,
      title:"Estudar JavaScript",
      description:"Estudar JavaScript para ter entendimento de produção.",
      isCompleted: false,
    },
  
  ])

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      //preciso atualizar essa tarefa
      if (task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }

      //Não preciso atualizar essa tarefa
      return task;
    })
    setTasks(newTasks)
  }

  return(
  
      <div className="display-task">
        <div className="main-card">
          <h1 className="">Gerenciador de Tarefas</h1>
          <AddTask/>
          <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        </div>
      </div>
  )
}

export default App