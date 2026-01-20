import { useState } from "react";
import styles from "./DropArea.module.css";

const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => {
        (onDrop(), setShowDrop(false));
      }}
      className={showDrop ? styles.dropArea : styles.hideDropArea}
    >
      Drop Area
    </section>
  );
};

export default DropArea;
