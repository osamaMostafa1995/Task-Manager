import { useContext } from "react";
import { TaskListContext } from "../Context/TasklistContext";
import Task from "./Task";

const TaskList = () => {
    const {tasks}= useContext(TaskListContext)
    return ( 
        <div className="container">
          {tasks.length?<ul className="list">
              {tasks && tasks.map(task =>(
                 <Task task= {task} key={task.id}/>
              )
                 
              )}
              </ul> : <div className='no-task'>no tasks</div>}
        </div>
     );
}
 
export default TaskList;