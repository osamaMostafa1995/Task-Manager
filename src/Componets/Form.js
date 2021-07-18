import { useContext, useState } from "react";
import { TaskListContext } from "../Context/TasklistContext";

const Form = () => {
const {tasks,addToTask , clear} = useContext(TaskListContext);
const [title , setTitle] = useState ('');
const submit =(e)=>{
    e.preventDefault();
    addToTask(title);
    console.log(tasks);
setTitle("")
}
    return ( 
        <form onSubmit={submit} className="form">
            <input type="text"
             placeholder="Add Your Task"
               className="input"
                required 
                 value = {title}
                  onChange={e=>{setTitle(e.target.value)}}/>
            <div className="btns">
                <button type="submit" className= "add">Add To Tasks</button>
                <button onClick={clear} className ="clear">Clear</button>
            </div>
        </form>
     );
}
 
export default Form;