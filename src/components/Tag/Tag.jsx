import styles from "./Tag.module.css";

const Tag = ({ tagName, selectTag }) => {
  return (
    <button
      type="button"
      className={styles.tag}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
