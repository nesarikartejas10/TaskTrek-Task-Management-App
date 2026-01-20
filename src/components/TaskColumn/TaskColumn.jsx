import React from "react";
import useTaskStore from "../../store/useTaskStore";
import DropArea from "../DropArea/DropArea";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./TaskColumn.module.css";

const TaskColumn = ({ title, icon, status }) => {
  const tasks = useTaskStore((state) => state.tasks);
  const moveTask = useTaskStore((state) => state.moveTask);

  return (
    <section className={styles.taskColumn}>
      <h2 className={styles.taskColumnHeading}>
        <img src={icon} alt="" className={styles.taskColumnIcon} />
        {title}
      </h2>
      <DropArea onDrop={() => moveTask(status, 0)} />
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <React.Fragment key={task.id}>
              <TaskCard task={task} />
              <DropArea onDrop={() => moveTask(status, index + 1)} />
            </React.Fragment>
          ),
      )}
    </section>
  );
};

export default TaskColumn;
