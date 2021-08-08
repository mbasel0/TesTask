import React from "react";
import styles from "./style.module.scss";

export default function ResultsBar({ info }) {
  return (
    <div className={styles.ResultsBar}>
      <div className={styles.resultsT}>
        <div className={styles.results}>
          <div className={styles.resultsTop}>
            <span>{`${info[4]} - ${info[5]}`}</span>
            <span>{`${info[2]}`}</span>
          </div>
          <div className={styles.resultsBottom}>
            <span>{`${info[0]} - ${info[3]}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
