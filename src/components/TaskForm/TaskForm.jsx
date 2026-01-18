import styles from "./TaskForm.module.css";

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
          <div>
            <button className={styles.tag}>HTML</button>
            <button className={styles.tag}>CSS</button>
            <button className={styles.tag}>JavaScript</button>
            <button className={styles.tag}>React</button>
          </div>

          <div>
            <select className={styles.taskStatus}>
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className={styles.taskSubmit}>
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
