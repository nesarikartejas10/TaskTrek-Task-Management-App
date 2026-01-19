import { useState } from "react";
import Tag from "../Tag/Tag";
import styles from "./TaskForm.module.css";

const tagList = ["HTML", "CSS", "JavaScript", "React"];

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleTaskData = (e) => {
    const { name, value } = e.target;
    setTaskData((prevTasks) => {
      return { ...prevTasks, [name]: value };
    });
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filteredTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prevTasks) => {
        return { ...prevTasks, tags: filteredTags };
      });
    } else {
      setTaskData((prevTasks) => {
        return { ...prevTasks, tags: [...prevTasks.tags, tag] };
      });
    }
  };

  console.log(taskData.tags);

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
            {tagList.map((tag) => {
              return <Tag key={tag} tagName={tag} selectTag={selectTag} />;
            })}
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
