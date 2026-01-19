import { useState } from "react";
import Tag from "../Tag/Tag";
import styles from "./TaskForm.module.css";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });

  const handleTaskData = (e) => {
    const { name, value } = e.target;
    setTaskData((prevTask) => {
      return { ...prevTask, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.taskInput}
          placeholder="Enter your task"
          name="task"
          value={taskData.task}
          onChange={handleTaskData}
        />

        <div className={styles.taskFormBottomLine}>
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>

          <div>
            <select
              className={styles.taskStatus}
              name="status"
              value={taskData.status}
              onChange={handleTaskData}
            >
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
