import "./App.css";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import TaskForm from "./components/TaskForm/TaskForm";
import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png";
import Done from "./assets/check-mark-button.png";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="appMain">
        <TaskColumn title="To do" icon={Todo} />
        <TaskColumn title="Doing" icon={Doing} />
        <TaskColumn title="Done" icon={Done} />
      </main>
    </div>
  );
};

export default App;
