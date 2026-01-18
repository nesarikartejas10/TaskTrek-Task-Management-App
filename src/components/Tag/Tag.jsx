import styles from "./Tag.module.css";

const Tag = ({ tagName }) => {
  return <button className={styles.tag}>{tagName}</button>;
};

export default Tag;
