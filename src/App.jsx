import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="appMain">
        <section className="taskColumn">Section 1</section>
        <section className="taskColumn">Section 2</section>
        <section className="taskColumn">Section 3</section>
      </main>
    </div>
  );
};

export default App;
