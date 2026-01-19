import Tag from "../Tag/Tag";
import styles from "./TaskCard.module.css";
import deleteIcon from "../../assets/delete.png";

function TaskCard({ task }) {
  return (
    <article className={styles.taskCard}>
      <p className={styles.taskText}>{task.task}</p>
      <div className={styles.taskCardBottomLine}>
        <div className={styles.taskCardTags}>
          {task.tags.map((tag) => (
            <Tag key={tag} tagName={tag} isSelected={true} />
          ))}
        </div>
        <div className={styles.taskDelete}>
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
