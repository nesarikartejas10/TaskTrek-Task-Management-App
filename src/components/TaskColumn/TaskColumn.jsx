import useTaskStore from "../../store/useTaskStore";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./TaskColumn.module.css";

const TaskColumn = ({ title, icon, status }) => {
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <section className={styles.taskColumn}>
      <h2 className={styles.taskColumnHeading}>
        <img src={icon} alt="" className={styles.taskColumnIcon} />
        {title}
      </h2>
      {tasks.map(
        (task) =>
          task.status === status && <TaskCard key={task.id} task={task} />,
      )}
    </section>
  );
};

export default TaskColumn;
