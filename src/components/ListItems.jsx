import { useState } from "react";

const ListItems = ()=>{

    const [tasks, setTasks] = useState([]);
    const [newTask, setnewTask] = useState("");

    const handleTaskInput = (event)=>{
        setnewTask(event.target.value);
    }

   
    const addNewTask =(event)=>{
        if(newTask != ""){
            setTasks(task=>[...tasks, newTask]);
            setnewTask("");
        }
    }
   
    const deleteTask=(index)=>{
        setTasks(tasks.filter((_,i)=>{ return (i !== index)}));
    }
 
    const moveTaskUp = (index)=>{
        if(index > 0){
            const updatedList = [...tasks];
            [updatedList[index - 1], updatedList[index]] = [updatedList[index], updatedList[index - 1]]; // Swap in-place
            setTasks(updatedList);
        }
    }
 
    const moveTaskDown=(index)=>{
        if(index < tasks.length-1){
            const updatedList = [...tasks];
            [updatedList[index + 1], updatedList[index]] = [updatedList[index], updatedList[index + 1]]; // Swap in-place
            setTasks(updatedList);
        }
    }





    return(<>
    <div className="mainContainer">
        <div className="todolistinput">
            <h1>To-Do List</h1>

            <input 
                type="text"
                value={newTask}
                onChange={handleTaskInput}
                />
            <button 
                className="add-button"
                onClick={addNewTask}>
                ADD
            </button>

            <ol>
                <div className="todolist">
                    {tasks.map((task, index)=>{
                        return(
                            <li key={index}>
                               <span className="tasktext"> {task}</span>
                               <button 
                                className="delete-button"
                                onClick={()=>deleteTask(index)}>
                                DELETE
                               </button>

                               <button 
                                className="moveup-button"
                                onClick={()=>moveTaskUp(index)}>
                                ☝️
                               </button>

                               <button 
                                className="movedown-button"
                                onClick={()=>moveTaskDown(index)}>
                                👇
                               </button>

                            </li>
                        );
                    })}
                </div>
            </ol>
        </div>
    </div>
    
    
    </>)
}
  
export default ListItems;