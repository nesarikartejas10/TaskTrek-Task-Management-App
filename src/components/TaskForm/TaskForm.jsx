import { styles } from "./TaskForm.module.css";

const TaskForm = () => {
  return (
    <header className={styles.header}>
      <form>
        <input
          type="text"
          className={styles.taskInput}
          placeholder="Enter your task"
        />

        <div className={styles.taskFormBottomLine}>
          <button classname={styles.tag}>HTML</button>
          <button classname={styles.tag}>CSS</button>
          <button classname={styles.tag}>JavaScript</button>
          <button classname={styles.tag}>React</button>

          <section classname={styles.taskStatus}>
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </section>

          <button type="submit" className={styles.taskSubmit}>
            + Add Task
          </button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
