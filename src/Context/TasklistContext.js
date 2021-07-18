
import { createContext, useEffect, useState } from "react";

export const TaskListContext=createContext();
const TaskListContextProvider = (props) => {
    const storage = JSON.parse(localStorage.getItem("task"))|| [];
const [tasks , setTasks] = useState(storage);
const addToTask = (title) =>{
  setTasks([...tasks , {task:title , id :tasks.length +1}]);}
  const removeTask = (id) =>{
      setTasks(tasks.filter(task=>task.id !==id))
  }
  const clear = () =>{
      setTasks ([])
  }
  useEffect(()=>{
      localStorage.setItem("task" , JSON.stringify(tasks))
  })
    return ( 
        <TaskListContext.Provider value = {{tasks , addToTask , removeTask , clear}}>
            {props.children}
        </TaskListContext.Provider>
     );
}
 
export default TaskListContextProvider;