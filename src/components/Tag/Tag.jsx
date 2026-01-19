import styles from "./Tag.module.css";

const Tag = ({ tagName, selectTag, isSelected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#E34C26" },
    CSS: { backgroundColor: "#3c99dc" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#61DBFB" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      className={styles.tag}
      style={isSelected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
