import React from "react";
import styles from "./Loading.module.css";

const Loading = ({ show = true }) => {
  return (
    show && (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <span className={styles.loader}></span>
          <p className={styles.loadingText}>Loading...</p>
        </div>
      </div>
    )
  );
};

export default Loading;
