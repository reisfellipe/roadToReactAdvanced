import arrow from '../assets/right-arrow.png';

function Tasks(props){

    return(
        
        <ul>
            {props.tasks.map((task) => (
                <li key={task.id} className="task-display">
                    <div onClick={() => props.onTaskClick(task.id)} id='button' className={`${task.isCompleted && 'line-through'}`}>
                        {task.title}
                    </div>   
                    <button>
                        <img src={arrow} alt="" />
                    </button>  
                </li>
            ))}
        </ul>

    )   
    
}
export default Tasks