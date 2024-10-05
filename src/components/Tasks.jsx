import arrow from '../assets/right-arrow.png';

function Tasks(props){

    return(
        
        <ul>
            {props.tasks.map((task) => (
                <li key={task.id} className="task-display">
                    <div className="button">
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