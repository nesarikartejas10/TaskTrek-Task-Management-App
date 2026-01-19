import Tag from "../Tag/Tag";
import styles from "./TaskCard.module.css";
import deleteIcon from "../../assets/delete.png";
import useTaskStore from "../../store/useTaskStore";

function TaskCard({ task }) {
  const deleteTask = useTaskStore((state) => state.deleteTask);
  return (
    <article className={styles.taskCard}>
      <p className={styles.taskText}>{task.task}</p>
      <div className={styles.taskCardBottomLine}>
        <div className={styles.taskCardTags}>
          {task.tags.map((tag) => (
            <Tag key={tag} tagName={tag} isSelected={true} />
          ))}
        </div>
        <div className={styles.taskDelete} onClick={() => deleteTask(task.id)}>
          <img
            src={deleteIcon}
            alt="delete-icon"
            className={styles.deleteIcon}
          />
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
