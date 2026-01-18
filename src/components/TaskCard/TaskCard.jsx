import Tag from "../Tag/Tag";
import styles from "./TaskCard.module.css";
import deleteIcon from "../../assets/delete.png";

function TaskCard() {
  return (
    <article className={styles.taskCard}>
      <p className={styles.taskText}>This is sample text</p>
      <div className={styles.taskCardBottomLine}>
        <div className={styles.taskCardTags}>
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
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
