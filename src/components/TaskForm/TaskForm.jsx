import { useState } from "react";
import Tag from "../Tag/Tag";
import styles from "./TaskForm.module.css";
import useTaskStore from "../../store/useTaskStore";

const tagList = ["HTML", "CSS", "JavaScript", "React"];

const TaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const tasks = useTaskStore((state) => state.tasks);

  console.log(tasks.length);

  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  //handle task and status
  const handleTaskData = (e) => {
    const { name, value } = e.target;
    setTaskData((prevTasks) => {
      return { ...prevTasks, [name]: value };
    });
  };

  // handle tag selection
  const selectTag = (tag) => {
    if (taskData.tags.includes(tag)) {
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

  //form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskData);
    setTaskData({ task: "", status: "todo", tags: [] });

    console.log(tasks.length);
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
              return (
                <Tag
                  key={tag}
                  tagName={tag}
                  selectTag={selectTag}
                  isSelected={taskData.tags.includes(tag)}
                />
              );
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
