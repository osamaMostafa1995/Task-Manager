import { useContext } from "react";
import { TaskListContext } from "../Context/TasklistContext";

const Task = ({ task }) => {
  const{removeTask} = useContext(TaskListContext)
  return (
    <li className="task">
      <span>{task.task}</span>
     
        <button onClick={() =>removeTask(task.id)} className="btn-delate">
          <i className="far fa-trash-alt"></i>
        </button>
      
    </li>
  );
};

export default Task;
