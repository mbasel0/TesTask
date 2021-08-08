import React from "react";

import styles from "./style.module.scss";

export default function SearchButton({ onClick }) {
  return (
    <div className={styles.SearchButton}>
      <button onClick={() => onClick()}>Search</button>
    </div>
  );
}
