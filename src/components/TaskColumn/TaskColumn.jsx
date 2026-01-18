import styles from "./TaskColumn.module.css";

const TaskColumn = ({ title, icon }) => {
  return (
    <section className={styles.taskColumn}>
      <h2 className={styles.taskColumnHeading}>
        <img src={icon} alt="" className={styles.taskColumnIcon} />
        {title}
      </h2>
    </section>
  );
};

export default TaskColumn;
