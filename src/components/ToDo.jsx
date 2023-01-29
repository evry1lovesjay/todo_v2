import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons';


const ToDo = ({toDo, markDone, setUpdateTask, deleteTask}) => {
    return ( 
        <>
        {toDo && toDo
            .sort((a,b)=> a.id > b.id ? 1 :-1)
            .map((task, index)=>{
              return(
                  <div key={task.id}>
                    <div className="col taskBg">
                      <div className={task.status ? "done" : ""}>
                        <span className="taskNumber">{index+1}</span>
                        <span className="taskText">{task.title}</span>
                      </div> 
                      <div className='iconsWrap'>
                        <span title="Completed / Not Completed" onClick={(e)=> markDone(task.id)}><FontAwesomeIcon icon={faCircleCheck} /> </span>
                        {task.status ? null : (<span title="Edit" onClick={()=> setUpdateTask(task)}><FontAwesomeIcon icon={faPen} /> </span>)}
                        <span title="Delete" onClick={()=> deleteTask(task.id)}><FontAwesomeIcon icon={faTrashCan} /> </span>
                      </div> 
                    </div>  
                  </div>
              )
            })}
        </>
     );
    
}
 
export default ToDo;