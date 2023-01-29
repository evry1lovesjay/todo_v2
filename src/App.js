import React from 'react';
import { useState } from 'react';

import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";

import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';


function App() {

  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);

  // Temporary State
  const [task, setTask] = useState("");
  const [updateTask, setUpdateTask] = useState("");


  //functions
  //function to add task
  const addTask = () => {
    // if(newTask.length>0){
      // let num=toDo.length+1;
      // let newEntry = {id: num, title: newTask, status: false}
      // setToDo([...toDo, newEntry])
    // }


      //Refactored
      if(task.length>0){
      // let num=toDo.length+1;
      setToDo([...toDo, {id: toDo.length+1, title: task, status: false}])
      setTask("");
      }  
    }
  

  //function to delete task
  const deleteTask = (id) => {
    //  let newTasks = toDo.filter(task => task.id !== id)
    //  setToDo(newTasks);


    //Refactored
    setToDo(toDo.filter(task => task.id !== id));
  }

  //function to mark task as done
  const markDone = (id) => {
      // let newTask =  toDo.map(task=> {
      //   if(task.id===id){
      //     return({...task, status: !task.status})
      //   }
      //   return task;
      // })
      // setToDo(newTask)


      //Refactored
      setToDo(toDo.map(task=> task.id===id ? {...task, status: !task.status} : (task)))
  }

  //function to cancel upodate
  const cancelUpdate = () => {
    setUpdateTask("");
  }

  //function to change update
  const changeHolder  = (e) => {
    // let newEntry  ={
    //   id: updateTask.id,
    //   title: e.target.value,
    //   status: updateTask.status ? true : false,
    // }
    // setUpdateTask(newEntry)


    //Refactored
    setUpdateTask({...updateTask,
    title:e.target.value})
  }

  //function to update task
  const updateTaskFxn = () => {
    // let filteredRecords = [...toDo].filter(task => task.id !== updateTask.id);
    // let updatedObject = [...filteredRecords, updateTask]
    // setToDo(updatedObject)

    //Refactored
    let removeOldRecord = [...toDo].filter(task => task.id !== updateTask.id);
    setToDo([...removeOldRecord, updateTask])
    setUpdateTask("");
  }



  return (
    <div className="Container App">
      <br /><br/>
      <h2>To do List App (ReactJs)</h2>
      <br/><br/>


      {/*form to Update Task  */}
      {updateTask && updateTask ? (
        <>
        {/*form to Update Task  */}
          <UpdateForm 
            updateTask={updateTask}
            changeHolder= {changeHolder}
            updateTaskFxn = {updateTaskFxn}
            cancelUpdate = {cancelUpdate}
          />
      </>
      ) : (
        <>
        {/* form to add new task */}
        <AddTaskForm 
        task={task}
        setTask={setTask}
        addTask={addTask} />
        </>
      )}
      
      {/*Display Todo */}

      {toDo && toDo.length ? "": "No Tasks..."}
      <ToDo 
      toDo={toDo}
      markDone={markDone}
      setUpdateTask={setUpdateTask}
      deleteTask={deleteTask} />
    </div>
  );
}

export default App;
