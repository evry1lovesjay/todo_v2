const AddTaskForm = ({task, setTask, addTask}) => {
    return ( 
        <>
        {/* form to add new task */}
        <div className='row'>
          <div className='col'>      
                <input
                value={task}
                onChange={(event)=>setTask(event.target.value)} 
                className='form-control form-control-lg'/>
            </div>
            <div className='col-auto'>
                <button
                onClick={addTask} 
                className='btn btn-lg btn-success'>
                Add Task
                </button>        
          </div>
        </div>
        <br />
        </>
     );
}
 
export default AddTaskForm;