const UpdateForm = ({updateTask, changeHolder, updateTaskFxn, cancelUpdate}) => {
    return ( 
        <>
          <div className='row'>
            <div className='col'>
              <input 
              value={updateTask && updateTask.title}
              onChange={(e)=> changeHolder(e)}

              className='form-control form-control-lg'/>
            </div>
            <div className='col-auto'>
              <button 
              onClick={updateTaskFxn}
              className='btn btn-lg btn-success mr-20'>
                Update
              </button>
              <button 
              onClick={cancelUpdate}
              className='btn btn-lg btn-warning'>
                Cancel
              </button> 
            </div>
          </div>
        <br/>
      </>
     );
}
 
export default UpdateForm;