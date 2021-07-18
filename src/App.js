import Form from "./Componets/Form";
import TaskList from "./Componets/Tasklist";
import TaskListContextProvider from "./Context/TasklistContext";

function App() {
  return (
    <TaskListContextProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <Form />
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
}

export default App;
